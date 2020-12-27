package pl.mazur.pawel.DocumentsMaster.api.controllers;

import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.InputStream;

@RestController
@RequestMapping("/documents/files")
@CrossOrigin
public class FileController {

    @PostMapping("/upload")
    public void receiveNewDocuments(HttpServletRequest httpRequest) {
        System.out.println(httpRequest);
    }

    @SneakyThrows
    private InputStream extractFile(Object actualFile) {
//        return actualFile.getInputStream();
        System.out.println(actualFile);
        return null;
    }

}
