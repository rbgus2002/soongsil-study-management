package com.project.LMSSU.Entity;

import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class IncompleteSubjectContents {
    @Id @GeneratedValue
    private Long incompleteSubjectContentsId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_contents_id")
    private SubjectContents subjectContents;

    @Builder
    public IncompleteSubjectContents(Student student, SubjectContents subjectContents) {
        this.student = student;
        this.subjectContents = subjectContents;
    }
}
