package pl.mazur.pawel.DocumentsMaster.api.controllers;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.mazur.pawel.DocumentsMaster.api.dto.DocumentDTO;
import pl.mazur.pawel.DocumentsMaster.dao.model.DocumentEntity;
import pl.mazur.pawel.DocumentsMaster.dao.repos.DocumentRepository;

@RestController
@RequestMapping("/documents/files")
@CrossOrigin
@RequiredArgsConstructor
public class FileController {

    private final DocumentRepository documentRepository;

    @PostMapping("/upload")
    @SneakyThrows
    public void receiveNewDocuments(@RequestParam("file") MultipartFile file, DocumentDTO documentEntity) {
        documentEntity.setFileContent(file.getBytes());
        System.out.println(documentEntity);
    }

}
