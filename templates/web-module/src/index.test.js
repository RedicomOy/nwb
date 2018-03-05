import index from './'

describe('index.js', () => {
  it('should return module name', () => {
    expect(index).toBe('Welcome to {{name}}')
  })
})
