package pl.mazur.pawel.DocumentsMaster.api.dto;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Id;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TagDTO {
    private Long id;
    private String tag;
}
