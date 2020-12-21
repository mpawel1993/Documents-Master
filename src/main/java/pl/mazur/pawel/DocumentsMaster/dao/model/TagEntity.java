package pl.mazur.pawel.DocumentsMaster.dao.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Builder
@Table(name = "TAGS")
@AllArgsConstructor
@NoArgsConstructor
public class TagEntity {

    @Id
    @Column(name = "ID")
    private long id;

    @Column(name = "TAG")
    private String tag;

}
