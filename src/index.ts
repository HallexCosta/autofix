class Server {
  private port = 3000
  private static instance: Server

  public static init = function (): Server {
    if (Server.instance instanceof Server) {
      return Server.instance
    }

    Server.instance = new Server()

    return Server.instance
  }

  public listen = function (port: number): void {
    console.log('Running server...')
    this.port = port
  }

  public getPort = (): number => this.port
}

export default Server
