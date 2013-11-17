package com.braxisltd.angularunfiltered

import unfiltered.jetty.{ContextBuilder, Http}
import unfiltered.filter.Plan
import unfiltered.request.{Seg, GET}
import unfiltered.filter.request.ContextPath
import unfiltered.response.ResponseString
import java.io.File

object Run {
    private val server = Http(8000).context("/app") {
        ctx => ctx.resources(new File("app").toURI.toURL)
    }.context("/resources"){
        ctx => ctx.filter(new GreetingPlan)
    }

    def start() {
        server.start()
    }

    def stop() {
        server.stop()
    }

    def main(args: Array[String]) {
        start()
    }
}

class GreetingPlan extends Plan {
    def intent: Plan.Intent = {
        case GET(ContextPath(_, "/greeting")) => ResponseString("world")
    }
}