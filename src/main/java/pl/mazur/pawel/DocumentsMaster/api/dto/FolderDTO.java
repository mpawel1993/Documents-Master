package pl.mazur.pawel.DocumentsMaster.api.dto;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FolderDTO {
    private Long id;
    private String name;
}
