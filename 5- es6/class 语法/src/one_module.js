class ClassTest{
    constructor(x, y) {
        [this._x, this._y] = [x, y] 
    }
    toString () {
        return '(' + this._x + ', ' + this._y + ')';
    }
}

class ColorTest extends ClassTest{
    constructor(x, y, color){
        super(x, y)
        this._color =  color
        console.log(new.target.name);
    }

    toString() {
        return this._color + ' ' + super.toString(); // 调用父类的toString()
      }
}

export  {ClassTest, ColorTest}
