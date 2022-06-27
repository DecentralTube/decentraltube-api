import chai from "chai"
import chaiHttp from "chai-http"
import createServer from "../../../src/server"

chai.use(chaiHttp)
const should = chai.should(); // eslint-disable-line


const app = createServer()

describe("auth", () => {
  it("/auth responds with 200", (done) => {
    chai
      .request(app)
      .get("/auth")
      .then((response) => {
        response.status.should.eql(200)
        done()
      })
      .catch((e) => {
        console.log(e)
        done()
      })
  })
})
