import React from 'react';
import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { rhythm } from 'utils/typography';

import { CV as CVType } from 'types';
import { CV, Layout, ProfilePhoto, SEO } from '../components';
import noise from '../components/Layout/noise.png';
import cv from '../../content/cv.json';

interface Props {
  data: {
    awardsQuery: {
      edges: {
        node: CVType.Award;
      }[];
    };
  };
}

const BodyStyle = createGlobalStyle`
  body {
    background-image: url(${noise});
    background-color: ${({ theme }) => theme.noise.backgroundColor};
  }
`;

const Container = styled.div`
  padding: 0 ${rhythm(1)};

  @media (min-width: 48em) {
    display: grid;
    column-gap: ${rhythm(2)};
    grid-template-columns: 16rem minmax(20rem, 1fr);
    padding: 0;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 48em) {
    display: block;
  }
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.cv.main.backgroundColor};
  box-shadow: -5px 0 24px 0 rgba(0, 0, 0, 0.25);
  padding: ${rhythm(1)} ${rhythm(2)};

  @media (min-width: 48em) {
    margin-right: -${rhythm(2)};
  }
`;

const Section = styled.section`
  & h2 {
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.rainbowHeaders[0].from},
      ${({ theme }) => theme.rainbowHeaders[0].to}
    );
    border: none;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15),
      0px 10px 8px -6px rgba(0, 0, 0, 0.25);
    margin: ${rhythm(1)} -${rhythm(3)} ${rhythm(1)};
    position: relative;
    padding-left: ${rhythm(2)};
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);

    &::before,
    &::after {
      border-top: 0.5rem solid ${({ theme }) => theme.rainbowHeaders[0].to};
      content: '';
      display: block;
      height: 0;
      line-height: 0;
      position: absolute;
      top: 100%;
      width: 0;
    }

    @media (min-width: 48em) {
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15),
        20px 3px 5px 0 rgba(0, 0, 0, 0.25);
      margin-right: -${rhythm(4)};

      &::after {
        display: none;
      }
    }

    &::before {
      border-left: ${rhythm(1)} solid transparent;
      left: 0;
    }
    &::after {
      border-right: ${rhythm(1)} solid transparent;
      right: 0;
    }
  }

  &:nth-of-type(5n + 2) {
    & h2 {
      background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.rainbowHeaders[1].from},
        ${({ theme }) => theme.rainbowHeaders[1].to}
      );

      &::after,
      &::before {
        border-top-color: ${({ theme }) => theme.rainbowHeaders[1].to};
      }
    }
  }
  &:nth-of-type(5n + 3) {
    & h2 {
      background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.rainbowHeaders[2].from},
        ${({ theme }) => theme.rainbowHeaders[2].to}
      );

      &::after,
      &::before {
        border-top-color: ${({ theme }) => theme.rainbowHeaders[2].to};
      }
    }
  }
  &:nth-of-type(5n + 4) {
    & h2 {
      background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.rainbowHeaders[3].from},
        ${({ theme }) => theme.rainbowHeaders[3].to}
      );

      &::after,
      &::before {
        border-top-color: ${({ theme }) => theme.rainbowHeaders[3].to};
      }
    }
  }
  &:nth-of-type(5n + 5) {
    & h2 {
      background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.rainbowHeaders[4].from},
        ${({ theme }) => theme.rainbowHeaders[4].to}
      );

      &::after,
      &::before {
        border-top-color: ${({ theme }) => theme.rainbowHeaders[4].to};
      }
    }
  }

  & a {
    color: #333;
    border-bottom: 1px dotted #555;

    &:hover {
      border-bottom-style: solid;
    }
  }

  & h3 {
    border-bottom: 1px solid #ccc;
    text-transform: uppercase;
  }
`;

const ProfilePhotoContainer = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 0 0 ${rhythm(1)};
  padding: 0.25rem;
  width: 20rem;

  @media (min-width: 48em) {
    width: auto;
  }
`;

export default function CVPage(props: Props) {
  const {
    data: {
      awardsQuery: { edges: awards },
    },
  } = props;
  return (
    <Layout transparentFooter>
      <BodyStyle />
      <SEO title="CV" />
      <Container>
        <Sidebar>
          <h2>Rachel Kowert, PhD.</h2>
          <ProfilePhotoContainer>
            <ProfilePhoto />
          </ProfilePhotoContainer>
          <div>
            <p>For press inquiries, please contact:</p>
            <p>
              JKS Communications - Literary Publicity
              <br />
              Angelle Barbazon
              <br />
              <a href="mailto:angelle@jkscommunications.com">
                angelle@jkscommunications.com
              </a>
              <br />
              (615) 928-2462
            </p>
          </div>
        </Sidebar>
        <Main>
          <h1>Curriculum Vitae</h1>

          <Section>
            <h2 id="Education">Education</h2>
            {cv.education.map((education, i) => {
              return (
                <CV.DatedEntry
                  date={education.year}
                  key={`${education.year}-${education.source}`}
                  reset={i === 0}
                >
                  <CV.Education education={education} />
                </CV.DatedEntry>
              );
            })}
          </Section>

          <Section>
            <h2 id="ProfessionalAppointments">Professional Appointments</h2>
            {cv.professionalAppointments.map(({ date, title }, i) => (
              <CV.DatedEntry date={date} key={title} reset={i === 0}>
                {title}
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <h2 id="Publications">Publications</h2>
            <h3 id="Books">Books</h3>
            {cv.publications.books.map((book, i) => (
              <CV.DatedEntry date={book.date} key={book.title} reset={i === 0}>
                <CV.Book book={book} />
              </CV.DatedEntry>
            ))}

            <h3 id="EditedVolumes">Edited Volumes</h3>
            {cv.publications.editedVolumes.map((editedVolume, i) => (
              <CV.DatedEntry
                date={editedVolume.date}
                key={editedVolume.title}
                reset={i === 0}
              >
                <CV.Book book={editedVolume} />
              </CV.DatedEntry>
            ))}

            <h3 id="RefereedJournalArticles">Refereed Journal Articles</h3>
            {cv.publications.refereedJournalArticles.map((article, i) => (
              <CV.DatedEntry
                date={article.date}
                key={article.title}
                reset={i === 0}
              >
                <CV.JournalArticle article={article} />
              </CV.DatedEntry>
            ))}

            <h3 id="BookChapters">Book Chapters</h3>
            {cv.publications.bookChapters.map((chapter, i) => (
              <CV.DatedEntry
                date={chapter.date}
                key={chapter.title}
                reset={i === 0}
              >
                <CV.BookChapter chapter={chapter} />
              </CV.DatedEntry>
            ))}

            <h3 id="ConferenceProceedings">Conference Proceedings</h3>
            {cv.publications.conferenceProceedings.map((proceeding, i) => (
              <CV.DatedEntry
                date={proceeding.date}
                key={proceeding.title}
                reset={i === 0}
              >
                <CV.ConferenceProceeding proceeding={proceeding} />
              </CV.DatedEntry>
            ))}

            <h3 id="OtherPublications">Other Publications</h3>
            {cv.publications.otherPublications.map((publication, i) => (
              <CV.DatedEntry
                date={publication.date}
                key={publication.title}
                reset={i === 0}
              >
                <CV.OtherPublication publication={publication} />
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <h2 id="AwardsAndHonors">Awards and Honors</h2>
            {awards.map(({ node: award }, i) => (
              <CV.DatedEntry
                date={award.frontmatter.date}
                key={award.id}
                reset={i === 0}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: award.html,
                  }}
                />
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <h2 id="GrantsAndFellowships">Grants and Fellowships</h2>
            {cv.grantsAndFellowships.map((entry, i) => (
              <CV.DatedEntry date={entry.date} reset={i === 0}>
                {entry.title}
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <h2 id="InvitedTalks">Invited Talks</h2>
            {cv.invitedTalks.map((talk, i) => (
              <CV.DatedEntry date={talk.date} reset={i === 0}>
                {talk.authors.replace(/\.$/, '')}. ({talk.date}). {talk.title}.{' '}
                <i dangerouslySetInnerHTML={{ __html: talk.extra }} />.{' '}
                {talk.location}.
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <h2 id="ConferenceParticipation">Conference Participation</h2>

            <h3 id="ConferencesOrganized">Conferences Organized</h3>
            {cv.conferenceParticipation.conferencesOrganized.map((entry, i) => (
              <CV.DatedEntry date={entry.date} reset={i === 0}>
                {entry.title}, {entry.location}, {entry.date}
              </CV.DatedEntry>
            ))}

            <h3 id="PanelsOrganized">Panels Organized</h3>
            {cv.conferenceParticipation.panelsOrganized.map((panel, i) => (
              <CV.DatedEntry date={panel.date} reset={i === 0}>
                {panel.authors.replace(/\.$/, '')}. ({panel.date}).{' '}
                {panel.title}. <i>{panel.extra}</i>. {panel.location}.
              </CV.DatedEntry>
            ))}

            <h3 id="PapersPresented">Papers Presented</h3>
            {cv.conferenceParticipation.papersPresented.map((paper, i) => {
              const extra = paper.extra ? <i>{paper.extra}.</i> : '';
              return (
                <CV.DatedEntry date={paper.date} reset={i === 0}>
                  {paper.authors.replace(/\.$/, '')}. ({paper.date}).{' '}
                  {paper.title}.{extra} <i>{paper.conference.title}</i>.{' '}
                  {paper.conference.location}.
                </CV.DatedEntry>
              );
            })}
          </Section>

          <Section>
            <h2 id="TeachingAndSupervisionExperience">
              Teaching and Supervision Experience
            </h2>
            {cv.teachingAndSupervisionExperience.map(position => (
              <div>
                <b>{position.location}</b>
                <ul>
                  {position.courses.map(course => (
                    <li>
                      {course.title} ({course.date})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section>
            <h2 id="ServiceToProfession">Service to Profession</h2>
            <ul>
              {cv.serviceToProfession.map(service => (
                <li
                  dangerouslySetInnerHTML={{
                    __html: `${service.title}, ${service.date}`,
                  }}
                />
              ))}
            </ul>
          </Section>

          <Section>
            <h2 id="ReviewingExperience">Reviewing Experience</h2>
            <ul>
              {cv.reviewingExperience.map(entry => (
                <li>
                  <i>{entry.title}</i>, {entry.date}
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <h2 id="DepartmentalAndUniversityService">
              Departmental and University Service
            </h2>
            <ul>
              {cv.departmentalAndUniversityService.map(entry => (
                <li>
                  {entry.title}, {entry.date}
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <h2 id="SelectedPressAndMedia">Selected Press and Media</h2>
            {cv.selectedPressAndMedia.map((entry, i) => {
              const title = entry.url ? (
                <a href={entry.url}>{entry.title}</a>
              ) : (
                entry.title
              );
              const source = entry.formattedSource ? (
                <span
                  dangerouslySetInnerHTML={{ __html: entry.formattedSource }}
                />
              ) : (
                <i>{entry.source}</i>
              );
              return (
                <CV.DatedEntry date={entry.date} reset={i === 0}>
                  {entry.authors.replace(/\.$/, '')}. ({entry.date}). {title}.{' '}
                  {source}.
                </CV.DatedEntry>
              );
            })}
          </Section>

          <Section>
            <h2 id="ProfessionalMemberships">Professional Memberships</h2>
            <ul>
              {cv.professionalMemberships.map(entry => (
                <li>
                  <a href={entry.url}>{entry.title}</a> (Joined {entry.date})
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <h2 id="References">References</h2>
            {cv.references.map(reference => (
              <p dangerouslySetInnerHTML={{ __html: reference.reference }} />
            ))}
          </Section>
        </Main>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    awardsQuery: allMarkdownRemark(
      filter: { fields: { collection: { eq: "awards" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY")
          }
          html
        }
      }
    }
  }
`;
