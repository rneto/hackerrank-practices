const OPERAND = {
  One: 0,
  Two: 1
}

class Calculator {

  _initValues() {
    this.currentOperand = OPERAND.One;
    this.operands = ['', ''];
    this.operator = '';
    this._showOperation();
  }

  _initControls() {
    document.getElementById('btn0').addEventListener('click', ()=>{
      this._increaseOperand(0);
    });

    document.getElementById('btn1').addEventListener('click', ()=>{
      this._increaseOperand(1);
    });

    document.getElementById('btnClr').addEventListener('click', ()=>{
      this._initValues();
    });

    document.getElementById('btnEql').addEventListener('click', ()=>{
      this._showResult();
    });

    let elements = document.querySelectorAll(".js-operator");
    elements.forEach((element) => {
      element.addEventListener('click', (e)=>{
        if (!this.operands[OPERAND.One] ||
            this.currentOperand)
        {
          return false;
        }

        this.currentOperand = OPERAND.One ==  OPERAND.One ? OPERAND.Two : OPERAND.One;
        var btn = e.target || e.srcElement;
        this._setOperator(document.getElementById(btn.id).innerHTML);
      });
    });
  };

  _increaseOperand(value) {
    console.log(this.operands);
    this.operands[this.currentOperand] = ''.concat(this.operands[this.currentOperand], value);
    console.log(this.operands);
    this._showOperation();
  }

  _showOperation() {
    document.getElementById('res').innerHTML = `${this.operands[OPERAND.One]}${this.operator}${this.operands[OPERAND.Two]}`;
  }

  _showResult() {
    if (!this.operands[OPERAND.One] ||
        !this.operator ||
        !this.operands[OPERAND.Two])
      {
        return false;
      }
    let result = eval(`parseInt(${this.operands[OPERAND.One]},2)${this.operator}parseInt(${this.operands[OPERAND.Two]},2)`);
    document.getElementById('res').innerHTML = result.toString(2);
  }

  _setOperator(operator) {
    this.operator = operator;
    this._showOperation();
  }

  constructor() {
    this._initValues();
    this._initControls();
  }

}

let calculator = new Calculator();