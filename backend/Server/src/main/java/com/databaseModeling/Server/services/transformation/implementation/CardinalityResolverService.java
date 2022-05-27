package com.databaseModeling.Server.services.transformation.implementation;

import com.databaseModeling.Server.model.conceptionalModel.EntityRelationAssociation;
import com.databaseModeling.Server.model.conceptionalModel.EntityRelationElement;
import com.databaseModeling.Server.model.dataStructure.graph.Graph;
import com.databaseModeling.Server.model.dataStructure.tree.TreeNode;
import com.databaseModeling.Server.model.conceptionalModel.AssociationType;
import com.databaseModeling.Server.model.conceptionalModel.Cardinality;
import com.databaseModeling.Server.model.ValidationResult;
import com.databaseModeling.Server.services.transformation.interfaces.ICardinalityResolverService;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.databaseModeling.Server.services.util.ErUtil.resolveAssociationQualifiedName;


public class CardinalityResolverService implements ICardinalityResolverService {

    @Override
    public void ResolveCardinalities(Graph<TreeNode<EntityRelationElement>, EntityRelationAssociation> erGraph, ValidationResult validationResult){

        for (var edge : erGraph.graphEdges){

            if(edge.getEdgeData().getAssociationType() != AssociationType.Association) continue;

            List<String> errors = new ArrayList<>();

            var cardinality = resolveCardinality(edge.getEdgeData().getMin(), edge.getEdgeData().getMax(), errors);

            if(! errors.isEmpty()) validationResult.addErrorsWithPrefix(resolveAssociationQualifiedName(edge), errors);

            edge.getEdgeData().setCardinality(cardinality);
        }

    }

    private Cardinality resolveCardinality(String min, String max, List<String> errorMessages){

        var cardinalityMin = this.parseAssociationValue(min,errorMessages);
        var cardinalityMax = this.parseAssociationValue(max,errorMessages);

        if(! errorMessages.isEmpty()) return null;

        if(cardinalityMin < 0) errorMessages.add("The min cardinality is negative");
        if(cardinalityMax < 0) errorMessages.add("The max cardinality is negative");
        if(cardinalityMin == 0 && cardinalityMax == 0) errorMessages.add("The min and max cardinality are 0");
        if(cardinalityMin > cardinalityMax) errorMessages.add("The min cardinality is greater than the max cardinality");

        if(cardinalityMin == 0 && cardinalityMax == 1) return Cardinality.OptionalOne;
        if(cardinalityMin == 0 && cardinalityMax > 1)  return Cardinality.Many;
        if(cardinalityMin == 1 && cardinalityMax == 1) return Cardinality.MandatoryOne;
        if(cardinalityMin == 1 && cardinalityMax > 1)  return Cardinality.Many;
        if(cardinalityMin > 1  && cardinalityMax > 1)  return Cardinality.Many;

        errorMessages.add("The cardinality could not be parsed");
        return null;
    }

    private int parseAssociationValue(String value, List<String> errorMessages){

        String alphabeticValue = "AlphabeticValue";
        String numericValue = "NumericValue";

        String regex = "^\\s*((?<" + alphabeticValue + ">[A-Za-z]+)|(?<" + numericValue + ">\\d+))\\s*$";

        Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(value);

        if(! matcher.matches()) errorMessages.add("The cardinality " + value + " could not be parsed");

        int number = 0;

        //Annahme alphabetic value = 1 --> matcher.group.isEmpty == Fals -> Negation = true -> maxValue ? ohoh
        var numVal  = matcher.group(numericValue);
        var alphVal = matcher.group(alphabeticValue);
        //Wenn numeric value gesetzt ist
        if(matcher.group(numericValue) != null && !matcher.group(numericValue).isEmpty())
            return getNumberOfValue(matcher.group(numericValue));


        if(matcher.group(alphabeticValue) != null && !matcher.group(alphabeticValue).isEmpty())
            return Integer.MAX_VALUE;


        errorMessages.add("The cardinality " + value + " could not be parsed");
        return number;
    }

    private int getNumberOfValue(String val1){
        int number;
        try{
            //Check for stack overflow
            number = Integer.parseInt(val1);
        }
        catch (NumberFormatException e ) {
            number = Integer.MAX_VALUE;
        }
        return number;
    }


}
