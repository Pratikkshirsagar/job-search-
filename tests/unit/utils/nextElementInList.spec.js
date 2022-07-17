import nextElementInList from '@/utils/nextElementInList';

describe('nextElementInList', () => {
  it('locates element in list and returns the next element in list', () => {
    const list = ['A', 'B', 'C', 'D'];
    const value = 'C';
    const result = nextElementInList(list, value);
    expect(result).toBe('D');
  });

  describe('when element is at the end of the list', () => {
    it('locates next elements at start of the list', () => {
      const list = ['A', 'B', 'C', 'D'];
      const value = 'D';
      const result = nextElementInList(list, value);
      expect(result).toBe('A');
    });
  });
});
