import Server from './index'

describe('Server', () => {
  it('Should be able to check server port', () => {
    const server = Server.init()
    server.listen(5000)

    expect(server.getPort()).toBe(5000)
  })
})
