package pl.mazur.pawel.DocumentsMaster


import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@SpringBootTest
@ContextConfiguration(classes = DocumentsMasterApplication)
class DocumentsMasterApplicationSpec extends Specification {

    def "Should run spring context"() {
        when: true
        then: true
    }
}
