// Shapes is a parent class to apply user-entered variables for color and text
class Shapes {
    setText(textColor, text) {
        this.textColor = textColor;
        this.text = text;
  }

  renderLogoText() {
    return `<text x="150" y="110" font-size="40" fill="${this.textColor}" text-anchor="middle">
            ${this.text.trim().toUpperCase()}
         </text>`;
  }

  setFill(fill) {
    this.fill = fill;
    return `${this.fill}`;
  }
}

class Circle extends Shapes {
  renderUserShape() {
    return `<circle cx="150" cy="100" r="50" fill="${this.fill}"/>`;
  }
}

class Square extends Shapes {
  renderUserShape() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.fill}"/>`;
  }
}

class Triangle extends Shapes {
  renderUserShape() {
    return `<polygon points="70, 120 170, 25 220, 155" fill="${this.fill}"/>`;
  }
}

// Exports `Triangle`, `Circle`, and `Square` classes
module.exports = { Circle, Square, Triangle };
