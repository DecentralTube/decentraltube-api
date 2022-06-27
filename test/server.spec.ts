import chai from "chai"
import chaiHttp from "chai-http"
import createServer from "../src/server"

chai.use(chaiHttp)
const should = chai.should(); // eslint-disable-line

const app = createServer()

describe("server checks", () => {
  it("server is created without errors", (done) => {
    chai
      .request(app)
      .get("/")
      .then((response) => {
        response.status.should.eql(200)
        response.text.should.eql("Hello World")
        done()
      })
      .catch((e) => {
        console.error(e)
        done(e)
      })
  })
})
