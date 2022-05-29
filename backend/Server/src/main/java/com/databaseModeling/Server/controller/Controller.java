package com.databaseModeling.Server.controller;

import com.databaseModeling.Server.model.ErTreeGraphFactory;
import com.databaseModeling.Server.model.TableDtoFactory;
import com.databaseModeling.Server.model.ValidationResult;
import com.databaseModeling.Server.model.relationalModel.TableManager;
import com.databaseModeling.Server.services.transformation.implementation.*;
import com.databaseModeling.Server.services.transformation.interfaces.ICardinalityResolverService;
import com.databaseModeling.Server.services.transformation.interfaces.ITransformAttributesService;
import com.databaseModeling.Server.services.transformation.interfaces.ITransformWeakTypesService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class Controller {

    @GetMapping("/test")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
    public String doSthm() {
        System.out.println("received");
        return "hallo";
    }

    @GetMapping("/index.html")
    public ModelAndView doSthm2() {
        ModelAndView m = new ModelAndView();
        m.setViewName("index.html");
        return m;
    }


    @PostMapping("/convert/relational")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
    public RelationalModelDto convertToRelational(
            @RequestBody ConceptionalModelDto type)
    {
        //Idee für später Node Abstrakte klasse implementiert INode, Edge Abstrakte klasse implementiert IEdge
        //Graph <N,E> mit extends Inode extends IEdge
        //Graph <Element, Association>

        System.out.println(type.getDrawBoardContent().getElements().size());
        var validationResult = new ValidationResult();

        //Create graph
        var graph = ErTreeGraphFactory.createGraph(type.getDrawBoardContent());

        //Resolve associations
        ICardinalityResolverService cardinalityResolverService = new CardinalityResolverService();
        cardinalityResolverService.ResolveCardinalities(graph, new ValidationResult());

        //TRANSFORMATION

        //Transform attributes by object references
        ITransformAttributesService transformAttributesService = new TransformAttributesService();
        transformAttributesService.transformAttributes(graph);

        var tables = TableManager.getTableRegister();

            //Transform weak entities by object reference
            ITransformWeakTypesService weakTypesService = new TransformWeakTypesService();
            weakTypesService.transformWeakTypes(graph);

            //Create and cascade primary keys of weak entities
            weakTypesService.generateIdentifyingPrimaryKeys(graph);

            var isaStructureService = new TransformIsAStructureService();
            isaStructureService.transformIsAStructures(graph);

            //Transform one to one
            var oneToOneService = new TransformOneToOneService();
            oneToOneService.transformOneToOneRelations(graph);

            //Transform many to one
            var manyToOneService = new TransformManyToOneService();
            manyToOneService.transformManyToOneRelations(graph);

            //Transform many to many
            var manyToManyService = new TransformManyToManyService();
            manyToManyService.transformManyToManyRelations(graph);

        //Create and cascade primary keys of attributes
        transformAttributesService.generateAttributeTableKeys(graph);

        var response = new RelationalModelDto();
        var content = new RelationalModelDto.DrawBoardContent();
        content.setTables(TableDtoFactory.createTableDto(TableManager.getTableRegister()));
        response.setDrawBoardContent(content);
        response.setProjectName(type.getProjectName());
        response.setProjectVersion(type.getProjectVersion());
        response.setProjectType("relationalDiagram");

        System.out.println(response);
        System.out.println(response.getDrawBoardContent().getTables().size());
        System.out.println(TableManager.getTableRegister().size());


        AtomicLong connectionIdCounter = new AtomicLong();
        var tableDto = content.getTables();
        List<RelationalModelDto.DrawBoardContent.ConnectionDTO> connectionDTOList = new ArrayList<>();

        for (var table : tableDto){
            for (var column : table.getColumns()){
                if(column.isForeignKey() && column.getForeignKeyReferencedId() != null){
                    var connection = new RelationalModelDto.DrawBoardContent.ConnectionDTO();
                    var key = column.getId() + " --> " + column.getForeignKeyReferencedId() + connectionIdCounter.getAndIncrement();
                    connection.setId(key);
                    connection.setStart(column.getId());
                    connection.setEnd(column.getForeignKeyReferencedId());
                    connectionDTOList.add(connection);
                }
            }
        }

        content.setConnections(connectionDTOList);
        TableManager.getTableRegister().clear();




        return response;
    }

}

