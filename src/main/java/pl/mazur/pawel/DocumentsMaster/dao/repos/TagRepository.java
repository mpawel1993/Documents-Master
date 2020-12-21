package pl.mazur.pawel.DocumentsMaster.dao.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.mazur.pawel.DocumentsMaster.dao.model.TagEntity;

public interface TagRepository extends JpaRepository<TagEntity, Long> {
}
