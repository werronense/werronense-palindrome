// adds reverse to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// defines a phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function processor(string) {
    return string.toLowerCase();
  }

  // returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // returns true if palindrome, false otherwise
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return this.processedContent() === this.processedContent().reverse();
  }
}
