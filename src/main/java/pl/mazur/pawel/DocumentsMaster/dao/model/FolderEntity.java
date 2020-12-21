package pl.mazur.pawel.DocumentsMaster.dao.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "FOLDER")
@AllArgsConstructor
@NoArgsConstructor
public class FolderEntity {

    @Id
    @Column(name = "ID")
    private long id;

    @Column(name = "NAME")
    private String name;
}
