class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="150" cy="100" r="80" />`;
    }
}
class Square extends Shape {
    render() {
        return `<rect fill="${this.color}" x="90" y="40" width="120" height="120" />`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="150,18 244, 182 56, 182" />`;
    } 
}
module.exports = { Shape, Circle, Square, Triangle };