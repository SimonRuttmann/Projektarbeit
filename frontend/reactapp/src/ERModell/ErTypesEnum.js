import IdentifyingAttributeDragBarSvg from './Components/DraggableSvgs/Attributes/IdentifyingAttribute.svg'
import WeakIdentifyingAttributeDragBarSvg from './Components/DraggableSvgs/Attributes/WeakIdentifyingAttribute.svg'
import NormalAttributeDragBarSvg from './Components/DraggableSvgs/Attributes/NormalAttribute.svg'
import MultivaluedAttributeDragBarSvg from './Components/DraggableSvgs/Attributes/MultivaluedAttribute.svg'
import StrongEntityDragBarSvg from './Components/DraggableSvgs/Entities/StrongEntity.svg'
import WeakEntityDragBarSvg from './Components/DraggableSvgs/Entities/WeakEntity.svg'
import StrongRelationDragBarSvg from './Components/DraggableSvgs/Relations/StrongRelation.svg'
import WeakRelationDragBarSvg from './Components/DraggableSvgs/Relations/WeakRelation.svg'
import IsAStructureDragBarSvg from './Components/DraggableSvgs/IsAStructure.svg'


import IdentifyingAttributeDragBarPreviewSvg from './Components/DragBarPreviewSvg/Attributes/IdentifyingAttribute.svg'
import WeakIdentifyingAttributeDragBarPreviewSvg from './Components/DragBarPreviewSvg/Attributes/WeakIdentifyingAttribute.svg'
import NormalAttributeDragBarPreviewSvg from './Components/DragBarPreviewSvg/Attributes/NormalAttribute.svg'
import MultivaluedAttributeDragBarPreviewSvg from './Components/DragBarPreviewSvg/Attributes/MultivaluedAttribute.svg'
import StrongEntityDragBarPreviewSvg from './Components/DragBarPreviewSvg/Entities/StrongEntity.svg'
import WeakEntityDragBarPreviewSvg from './Components/DragBarPreviewSvg/Entities/WeakEntity.svg'
import StrongRelationDragBarPreviewSvg from './Components/DragBarPreviewSvg/Relations/StrongRelation.svg'
import WeakRelationDragBarPreviewSvg from './Components/DragBarPreviewSvg/Relations/WeakRelation.svg'
import IsAStructureDragBarPreviewSvg from './Components/DragBarPreviewSvg/IsAStructure.svg'

import IdentifyingAttribute from "./Components/ErObjectComponents/Attributes/IdentifyingAttribute";
import NormalAttribute from "./Components/ErObjectComponents/Attributes/NormalAttribute";
import MultivaluedAttribute from "./Components/ErObjectComponents/Attributes/MultivaluedAttribute";
import WeakIdentifyingAttribute from "./Components/ErObjectComponents/Attributes/WeakIdentifyingAttribute";
import StrongEntity from "./Components/ErObjectComponents/Entities/StrongEntity";
import WeakEntity from "./Components/ErObjectComponents/Entities/WeakEntity";
import StrongRelation from "./Components/ErObjectComponents/Relations/StrongRelation";
import WeakRelation from "./Components/ErObjectComponents/Relations/WeakRelation";
import IsAStructure from "./Components/ErObjectComponents/IsAStructure";


// TODO Rename to erTypesIcon

export const erTypeCategory = {
    Attribute: "Attribute",
    Entity: "Entity",
    Relation: "Relation",
    IsAStructure: "IsAStructure"
}


export const erTypesCategory = {
    IdentifyingAttribute:       {value: "IdentifyingAttribute", category: erTypeCategory.Attribute},
    NormalAttribute:            {value: "NormalAttribute", category: erTypeCategory.Attribute},
    MultivaluedAttribute:       {value: "MultivaluedAttribute", category: erTypeCategory.Attribute},
    WeakIdentifyingAttribute:   {value: "WeakIdentifyingAttribute", category: erTypeCategory.Attribute},
    StrongEntity:               {value: "StrongEntity", category: erTypeCategory.Entity},
    WeakEntity:                 {value: "WeakEntity", category: erTypeCategory.Entity},
    StrongRelation:             {value: "StrongRelation", category: erTypeCategory.Relation},
    WeakRelation:               {value: "WeakRelation", category: erTypeCategory.Relation},
    IsAStructure:               {value: "IsAStructure", category: erTypeCategory.IsAStructure},
};


export const erTypesEnum = {
    IdentifyingAttribute:       <img src={IdentifyingAttributeDragBarSvg}       draggable className="leftSideBarElementImage" alt={"IdentifyingAttribute"}/>,
    NormalAttribute:            <img src={NormalAttributeDragBarSvg}            draggable className="leftSideBarElementImage" alt={"NormalAttribute"}/>,
    MultivaluedAttribute:       <img src={MultivaluedAttributeDragBarSvg}       draggable className="leftSideBarElementImage" alt={"MultivaluedAttribute"}/>,
    WeakIdentifyingAttribute:   <img src={WeakIdentifyingAttributeDragBarSvg}   draggable className="leftSideBarElementImage" alt={"WeakIdentifyingAttribute"}/>,
    StrongEntity:               <img src={StrongEntityDragBarSvg}               draggable className="leftSideBarElementImage" alt={"StrongEntity"}/>,
    WeakEntity:                 <img src={WeakEntityDragBarSvg}                 draggable className="leftSideBarElementImage" alt={"WeakEntity"}/>,
    StrongRelation:             <img src={StrongRelationDragBarSvg}             draggable className="leftSideBarElementImage" alt={"StrongRelation"}/>,
    WeakRelation:               <img src={WeakRelationDragBarSvg}               draggable className="leftSideBarElementImage" alt={"WeakRelation"}/>,
    IsAStructure:               <img src={IsAStructureDragBarSvg}               draggable className="leftSideBarElementImage" alt={"IsAStructure"}/>
};


export const erTypesPreview = {
    IdentifyingAttribute:       <img src={IdentifyingAttributeDragBarPreviewSvg}       draggable className="leftSideBarElementImage" alt={"IdentifyingAttribute"}/>,
    NormalAttribute:            <img src={NormalAttributeDragBarPreviewSvg}            draggable className="leftSideBarElementImage" alt={"NormalAttribute"}/>,
    MultivaluedAttribute:       <img src={MultivaluedAttributeDragBarPreviewSvg}       draggable className="leftSideBarElementImage" alt={"MultivaluedAttribute"}/>,
    WeakIdentifyingAttribute:   <img src={WeakIdentifyingAttributeDragBarPreviewSvg}   draggable className="leftSideBarElementImage" alt={"WeakIdentifyingAttribute"}/>,
    StrongEntity:               <img src={StrongEntityDragBarPreviewSvg}               draggable className="leftSideBarElementImage" alt={"StrongEntity"}/>,
    WeakEntity:                 <img src={WeakEntityDragBarPreviewSvg}                 draggable className="leftSideBarElementImage" alt={"WeakEntity"}/>,
    StrongRelation:             <img src={StrongRelationDragBarPreviewSvg}             draggable className="leftSideBarElementImage" alt={"StrongRelation"}/>,
    WeakRelation:               <img src={WeakRelationDragBarPreviewSvg}               draggable className="leftSideBarElementImage" alt={"WeakRelation"}/>,
    IsAStructure:               <img src={IsAStructureDragBarPreviewSvg}               draggable className="leftSideBarElementImage" alt={"IsAStructure"}/>
}

export const erTypesDescription = {
    IdentifyingAttribute:       <p>This is the description for a Identifying Attribute</p>,
    NormalAttribute:            <p>This is the description for a Normal Attribute</p>,
    MultivaluedAttribute:       <p>This is the description for a Multivalued Attribute</p>,
    WeakIdentifyingAttribute:   <p>This is the description for a Weak identifying Attribute</p>,
    StrongEntity:               <p>This is the description for a Strong Entity</p>,
    WeakEntity:                 <p>This is the description for a Weak Entity</p>,
    StrongRelation:             <p>This is the description for a Strong Relation</p>,
    WeakRelation:               <p>This is the description for a Weak Relation</p>,
    IsAStructure:               <p>This is the description for a IsA Structure</p>
}

export const erTypesName = {
    IdentifyingAttribute:       <h1>Identifying Attribute</h1>,
    NormalAttribute:            <h1>Normal Attribute</h1>,
    MultivaluedAttribute:       <h1>Multivalued Attribute</h1>,
    WeakIdentifyingAttribute:   <h1>Weak identifying Attribute</h1>,
    StrongEntity:               <h1>Strong Entity</h1>,
    WeakEntity:                 <h1>Weak Entity</h1>,
    StrongRelation:             <h1>Strong Relation</h1>,
    WeakRelation:               <h1>Weak Relation</h1>,
    IsAStructure:               <h1>Is A Structure</h1>
}

export const erTypesComponents = {
    IdentifyingAttribute:       <IdentifyingAttribute/>,
    NormalAttribute:            <NormalAttribute/>,
    MultivaluedAttribute:       <MultivaluedAttribute/>,
    WeakIdentifyingAttribute:   <WeakIdentifyingAttribute/>,
    StrongEntity:               <StrongEntity/>,
    WeakEntity:                 <WeakEntity/>,
    StrongRelation:             <StrongRelation/>,
    WeakRelation:               <WeakRelation/>,
    IsAStructure:               <IsAStructure/>
}

export const resolveIsAStructure = (type, props) => {
    switch (type) {
        case erTypesCategory.IdentifyingAttribute.value: return <IdentifyingAttribute {...props}/>
        case erTypesCategory.NormalAttribute.value: return <NormalAttribute {...props}/>
        case erTypesCategory.MultivaluedAttribute.value: return <MultivaluedAttribute {...props}/>
        case erTypesCategory.WeakIdentifyingAttribute.value: return <WeakIdentifyingAttribute {...props}/>
        case erTypesCategory.StrongEntity.value: return <StrongEntity {...props}/>
        case erTypesCategory.WeakEntity.value: return <WeakEntity {...props}/>
        case erTypesCategory.StrongRelation.value: return <StrongRelation {...props}/>
        case erTypesCategory.WeakRelation.value: return <WeakRelation {...props}/>
        case erTypesCategory.IsAStructure.value: return <IsAStructure {...props}/>
        default: return ""
    }
}