package pl.mazur.pawel.DocumentsMaster.dao.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@Table (name = "DOCUMENT")
@AllArgsConstructor
@NoArgsConstructor
public class DocumentEntity {

    @Id
    @Column(name = "ID")
    private long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "CREATE_DATE")
    private LocalDateTime createDate;

    @Column(name = "UPDATE_DATE")
    private Date updateDate;

    @Column(name = "UPLOAD_DATE")
    private Date uploadDate;

    @Lob
    @Column(name = "FILE_CONTENT")
    private String fileContent;

    @OneToOne
    @JoinColumn(name = "COUNTRY")
    CountryEntity countryEntity;

    @OneToOne
    @JoinColumn (name = "FOLDER")
    private FolderEntity folderEntity;

    @OneToMany
    @JoinColumn(name = "DOCUMENT")
    private List<TagEntity> tagEntities;
}
