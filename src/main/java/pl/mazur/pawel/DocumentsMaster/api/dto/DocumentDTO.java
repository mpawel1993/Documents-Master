package pl.mazur.pawel.DocumentsMaster.api.dto;

import lombok.*;
import pl.mazur.pawel.DocumentsMaster.dao.model.FolderEntity;
import pl.mazur.pawel.DocumentsMaster.dao.model.TagEntity;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DocumentDTO {
    private Long id;
    private String name;
    private LocalDateTime createDate;
    private Date updateDate;
    private Date uploadDate;
    private CountryDTO countryDTO;
    private FolderDTO folderDTO;
    private List<TagDTO> tagDTO;
    private byte[] fileContent;
}
