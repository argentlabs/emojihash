const emojiHash = require('../index.js');
const assert = require('chai').assert;

describe("emojiHash", () => {
  describe("constructor", () => {
    it("should be function export", () => {
      assert.equal(typeof emojiHash, 'function');
    });
  });

  describe("should function normal", () => {
    it('should return correct emoji hash', () => {
      assert.equal(emojiHash('0x0a8e61546c31062528df0b57de0a22e68d749173'), '🎩🍞🥑🦍');
      assert.equal(emojiHash('0x1852B93C6763d297782e7fEb65399F03efBDB7E6'), '🍇🍆⛷❓');
    });
  });
});
