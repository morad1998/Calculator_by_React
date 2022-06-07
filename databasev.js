//Schema Model:
const {Schema,model} = require("mongoose");



// Schema Design
const calculatorSchema = new Schema(
    {
    operation: {type: String, required: true},
    OperandX: {type: Number, required: true},
    OperandY: {type: Number, required: true},
    Result: {type: Number, required: true},
    creatingAt: {type: Date,immutable: true,default: () => Date.now()
    }
    
}, { timestamps: true });

//Model
const CalcOperation= model('CalcOperation',calculatorSchema);

//Export Model
module.exports = CalcOperation;