package pl.mazur.pawel.DocumentsMaster.api.dto;

import lombok.*;


@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountryDTO {
    private Long id;
    private String name;
    private String countryCode;
}
