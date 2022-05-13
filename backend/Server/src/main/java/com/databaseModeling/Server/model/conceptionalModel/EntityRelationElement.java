package com.databaseModeling.Server.model.conceptionalModel;

import com.databaseModeling.Server.model.ElementMetaInformation;
import com.databaseModeling.Server.model.relationalModel.Table;
import com.databaseModeling.Server.model.relationalModel.TableManager;

public class EntityRelationElement {

    private boolean isTransformed = false;

    public boolean isTransformed() {
        return isTransformed;
    }

    public void setTransformed(boolean transformed) {
        isTransformed = transformed;
    }

    private ErType erType;
    public ErType getErType() { return erType; }
    public void setErType(ErType erType) {
        this.erType = erType;
    }

    private final ElementMetaInformation elementMetaInformation;
    public ElementMetaInformation getElementMetaInformation() {return elementMetaInformation;}

    private Table table;

    public Table getTable(){return table;}
    public void setTable(Table table){this.table = table;}

    public boolean hasTable(){
        return table != null;
    }

    public void removeTable(){
        this.table = null;
    }
    public EntityRelationElement(ErType erType, ElementMetaInformation elementMetaInformation) {
        this.erType = erType;
        this.elementMetaInformation = elementMetaInformation;
        this.table = TableManager.createTable(erType, elementMetaInformation);
    }


}
