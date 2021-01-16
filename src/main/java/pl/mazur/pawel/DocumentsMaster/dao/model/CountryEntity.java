package pl.mazur.pawel.DocumentsMaster.dao.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "COUNTRY")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountryEntity {

    @Id
    @Column(name = "ID")
    private long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "COUNTRY_CODE")
    private String countryCode;
}
