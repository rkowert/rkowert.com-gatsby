import * as React from 'react';
import { Link } from 'gatsby';

import { CV, Layout, SEO } from '../components';

import cv from '../../content/cv.json';

interface Props {}

export default function CVPage(props: Props) {
  return (
    <Layout>
      <SEO title="CV" />
      <h1>CV</h1>

      <section>
        <h2 id="Education">Education</h2>
        {cv.education.map(education => {
          return (
            <CV.DatedEntry date={education.year}>
              <CV.Education education={education} />
            </CV.DatedEntry>
          );
        })}
      </section>

      <section>
        <h2 id="ProfessionalAppointments">Professional Appointments</h2>
        {cv.professionalAppointments.map(({ date, title }) => (
          <CV.DatedEntry date={date}>{title}</CV.DatedEntry>
        ))}
      </section>

      <section>
        <h2 id="Publications">Publications</h2>
        <h3 id="Books">Books</h3>
        {cv.publications.books.map(book => (
          <CV.DatedEntry date={book.date}>
            <CV.Book book={book} />
          </CV.DatedEntry>
        ))}

        <h3 id="EditedVolumes">Edited Volumes</h3>
        {cv.publications.editedVolumes.map(editedVolume => (
          <CV.DatedEntry date={editedVolume.date}>
            <CV.Book book={editedVolume} />
          </CV.DatedEntry>
        ))}

        <h3 id="RefereedJournalArticles">Refereed Journal Articles</h3>
        {cv.publications.refereedJournalArticles.map(article => (
          <CV.DatedEntry date={article.date}>
            <CV.JournalArticle article={article} />
          </CV.DatedEntry>
        ))}

        <h3 id="BookChapters">Book Chapters</h3>
        {cv.publications.bookChapters.map(chapter => (
          <CV.DatedEntry date={chapter.date}>
            <CV.BookChapter chapter={chapter} />
          </CV.DatedEntry>
        ))}

        <h3 id="ConferenceProceedings">Conference Proceedings</h3>
        {cv.publications.conferenceProceedings.map(proceeding => (
          <CV.DatedEntry date={proceeding.date}>
            <CV.ConferenceProceeding proceeding={proceeding} />
          </CV.DatedEntry>
        ))}

        <h3 id="OtherPublications">Other Publications</h3>
        {cv.publications.otherPublications.map(publication => (
          <CV.DatedEntry date={publication.date}>
            {publication.title}
          </CV.DatedEntry>
        ))}
      </section>

      <section>
        <h2 id="AwardsAndHonors">Awards and Honors</h2>
        {/* {cv.awardsAndHonors} */}
      </section>

      <section>
        <h2 id="GrantsAndFellowships">Grants and Fellowships</h2>
        {/* {cv.grantsAndFellowships} */}
      </section>

      <section>
        <h2 id="InvitedTalks">Invited Talks</h2>
        {/* {cv.invitedTalks} */}
      </section>

      <section>
        <h2 id="ConferenceParticipation">Conference Participation</h2>

        <h3 id="ConferencesOrganized">Conferences Organized</h3>
        {/* {cv.conferenceParticipation.conferencesOrganized} */}

        <h3 id="PanelsOrganized">Panels Organized</h3>
        {/* {cv.conferenceParticipation.panelsOrganized} */}

        <h3 id="PapersPresented">Papers Presented</h3>
        {/* {cv.conferenceParticipation.papersPresented} */}
      </section>

      <section>
        <h2 id="TeachingAndSupervisionExperience">
          Teaching and Supervision Experience
        </h2>
        {/* {cv.teachingAndSupervisionExperience} */}
      </section>

      <section>
        <h2 id="ServiceToProfession">Service to Profession</h2>
        {/* {cv.serviceToProfession} */}
      </section>

      <section>
        <h2 id="ReviewingExperience">Reviewing Experience</h2>
        {/* {cv.reviewingExperience} */}
      </section>

      <section>
        <h2 id="DepartmentalAndUniversityService">
          Departmental and University Service
        </h2>
        {/* {cv.departmentalAndUniversityService} */}
      </section>

      <section>
        <h2 id="SelectedPressAndMedia">Selected Press and Media</h2>
        {/* {cv.selectedPressAndMedia} */}
      </section>

      <section>
        <h2 id="ProfessionalMemberships">Professional Memberships</h2>
        {/* {cv.professionalMemberships} */}
      </section>

      <section>
        <h2 id="References">References</h2>
        {/* {cv.references} */}
      </section>
    </Layout>
  );
}
