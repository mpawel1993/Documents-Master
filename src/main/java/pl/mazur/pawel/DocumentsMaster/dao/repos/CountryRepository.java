package pl.mazur.pawel.DocumentsMaster.dao.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.mazur.pawel.DocumentsMaster.dao.model.CountryEntity;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
}
