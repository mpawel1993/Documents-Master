package pl.mazur.pawel.DocumentsMaster.api.controllers;

import lombok.SneakyThrows;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/documents/files")
@CrossOrigin
public class FileController {

    @PostMapping("/upload")
    public void receiveNewDocuments(@RequestParam("files") MultipartFile[] files) {
        List<InputStream> actual = Arrays.asList(files)
                .stream()
                .map(this::extractFile)
                .collect(Collectors.toList());

        System.out.println(actual);
    }

    @SneakyThrows
    private InputStream extractFile(Object actualFile) {
//        return actualFile.getInputStream();
        System.out.println(actualFile);
        return null;
    }

}
