// Shapes is a parent class to apply user-entered variables for color and text
class Shapes {
  setLogoText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  renderLogoText() {
    return `<text x="150" y="100" fill="${this.textColor}" text-anchor="middle">
            "${this.text}"
         </text>`;
  }

  setFill(fill) {
    this.fill = fill;
    return `${this.fill}`;
  }
}

class Circle extends Shapes {
  renderUserShape() {
    return `<circle cx="150", cy="100", r="50", fill="${this.fill}"/>`;
  }
}

class Square extends Shapes {
  renderUserShape() {
    return `<rect x=100 y=50 width: 100 height: 100, fill="${this.fill}"/>`;
  }
}

class Triangle extends Shapes {
  renderUserShape() {
    return `<polygon points="75, 100 225, 50 225, 150", fill="${this.fill}"/>`;
  }
}

// Exports `Triangle`, `Circle`, and `Square` classes
module.exports = { Circle, Square, Triangle };
