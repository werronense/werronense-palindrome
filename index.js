module.exports = Phrase;

// adds reverse to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// defines a phrase object
function Phrase(content) {
  this.content = content;

  // returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // returns the letters in the content
  this.letters = function letters() {
    return (this.content.match(/[a-zA-Z]/gi) || []).join("");
  }

  // returns true if palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
