package com.braxisltd.angularunfiltered

import org.scalatest.{BeforeAndAfterAll, FlatSpec}
import com.jayway.restassured.RestAssured
import org.hamcrest.Matchers

class GreetingResourceTest extends FlatSpec with BeforeAndAfterAll {

    "Greeting resource" should "return 'world'" in {
        RestAssured.expect().statusCode(200).body(Matchers.is("world")).when().get("http://localhost:8000/resources/greeting")
    }

    "Web page" should "return 200" in {
        RestAssured.expect().statusCode(200).body(Matchers.containsString("Hello {{greetingEntity}}!")).when().get("http://localhost:8000/app/index.html")
    }

    override protected def beforeAll() {
        Run.start()
    }

    override protected def afterAll() {
        Run.stop()
    }
}