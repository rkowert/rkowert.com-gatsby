import React from 'react';
import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import { CV, Layout, PermalinkHeader, ProfilePhoto, SEO } from 'components';
import { CV as CVType } from 'types';
import { rhythm } from 'utils/typography';

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
  @media (min-width: 48em) {
    display: grid;
    column-gap: ${rhythm(4)};
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
  margin: 0 -${rhythm(1)};
  padding: ${rhythm(1)} ${rhythm(1)};
  transition: background-color 0.3s ease-in-out;

  @media (min-width: 48em) {
    margin-right: -${rhythm(2)};
    padding: ${rhythm(1)} ${rhythm(2)};
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
    margin: ${rhythm(1)} -${rhythm(2)};
    position: relative;
    padding-left: ${rhythm(2)};
    text-shadow: 0 1px 1px rgb(255, 240, 219);

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
        8px 15px 5px -13px rgba(0, 0, 0, 0.25);
      margin-left: -${rhythm(3)};
      margin-right: -${rhythm(3)};
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

  &:nth-of-type(5n + 1) {
    & h2 {
      color: ${({ theme }) =>
        theme.rainbowHeaders[0].color || theme.body.color};
    }
  }

  &:nth-of-type(5n + 2) {
    & h2 {
      background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.rainbowHeaders[1].from},
        ${({ theme }) => theme.rainbowHeaders[1].to}
      );
      color: ${({ theme }) =>
        theme.rainbowHeaders[1].color || theme.body.color};
      text-shadow: 0 1px 1px rgb(214, 243, 220);

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
      color: ${({ theme }) =>
        theme.rainbowHeaders[2].color || theme.body.color};
      text-shadow: 0 1px 1px rgb(206, 131, 154);

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
      color: ${({ theme }) =>
        theme.rainbowHeaders[3].color || theme.body.color};
      text-shadow: 0 1px 1px rgb(149, 217, 245);

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
      color: ${({ theme }) =>
        theme.rainbowHeaders[4].color || theme.body.color};
      text-shadow: 0 1px 1px rgb(182, 128, 241);

      &::after,
      &::before {
        border-top-color: ${({ theme }) => theme.rainbowHeaders[4].to};
      }
    }
  }

  & a {
    border-bottom: 1px dotted #555;
    color: ${({ theme }) => theme.body.color};

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
    <Layout>
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
              <a href="tel:+16159282462">(615) 928-2462</a>
            </p>
          </div>
        </Sidebar>
        <Main>
          <h1>Curriculum Vitae</h1>

          <Section>
            <PermalinkHeader label="Education" level={2} />
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
            <PermalinkHeader label="Professional Appointments" level={2} />
            {cv.professionalAppointments.map((appointment, i) => (
              <CV.DatedEntry
                date={appointment.date}
                key={`${appointment.date}-${appointment.title}`}
                reset={i === 0}
              >
                <CV.ProfessionalAppointment appointment={appointment} />
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <PermalinkHeader label="Publications" level={2} />
            <PermalinkHeader label="Books" level={3} />
            {cv.publications.books.map((book, i) => (
              <CV.DatedEntry date={book.date} key={book.title} reset={i === 0}>
                <CV.Book book={book} />
              </CV.DatedEntry>
            ))}

            <PermalinkHeader label="Edited Volumes" level={3} />
            {cv.publications.editedVolumes.map((editedVolume, i) => (
              <CV.DatedEntry
                date={editedVolume.date}
                key={editedVolume.title}
                reset={i === 0}
              >
                <CV.Book book={editedVolume} />
              </CV.DatedEntry>
            ))}

            <PermalinkHeader label="Refereed Journal Articles" level={3} />
            {cv.publications.refereedJournalArticles.map((article, i) => (
              <CV.DatedEntry
                date={article.date}
                key={article.title}
                reset={i === 0}
              >
                <CV.JournalArticle article={article} />
              </CV.DatedEntry>
            ))}

            <PermalinkHeader label="Book Chapters" level={3} />
            {cv.publications.bookChapters.map((chapter, i) => (
              <CV.DatedEntry
                date={chapter.date}
                key={chapter.title}
                reset={i === 0}
              >
                <CV.BookChapter chapter={chapter} />
              </CV.DatedEntry>
            ))}

            <PermalinkHeader label="Conference Proceedings" level={3} />
            {cv.publications.conferenceProceedings.map((proceeding, i) => (
              <CV.DatedEntry
                date={proceeding.date}
                key={proceeding.title}
                reset={i === 0}
              >
                <CV.ConferenceProceeding proceeding={proceeding} />
              </CV.DatedEntry>
            ))}

            <PermalinkHeader label="Other Publications" level={3} />
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
            <PermalinkHeader label="Awards and Honors" level={2} />
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
            <PermalinkHeader label="Grants and Fellowships" level={2} />
            {cv.grantsAndFellowships.map((entry, i) => (
              <CV.DatedEntry
                date={entry.date}
                reset={i === 0}
                key={`${entry.date}-${entry.title}`}
              >
                {entry.title}
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <PermalinkHeader label="Invited Talks" level={2} />
            {cv.invitedTalks.map((talk, i) => (
              <CV.DatedEntry
                date={talk.date}
                reset={i === 0}
                key={`${talk.date}-${talk.title}`}
              >
                {talk.authors.replace(/\.$/, '')}. ({talk.date}). {talk.title}.{' '}
                <i dangerouslySetInnerHTML={{ __html: talk.extra }} />.{' '}
                {talk.location}.
              </CV.DatedEntry>
            ))}
          </Section>

          <Section>
            <PermalinkHeader label="Conference Participation" level={2} />
            <PermalinkHeader label="Conferences Organized" level={3} />
            {cv.conferenceParticipation.conferencesOrganized.map((entry, i) => (
              <CV.DatedEntry
                date={entry.date}
                reset={i === 0}
                key={`${entry.date}-${entry.title}`}
              >
                {entry.title}, {entry.location}, {entry.date}
              </CV.DatedEntry>
            ))}

            <PermalinkHeader label="Panels Organized" level={3} />
            {cv.conferenceParticipation.panelsOrganized.map((panel, i) => (
              <CV.DatedEntry
                date={panel.date}
                reset={i === 0}
                key={`${panel.date}-${panel.title}`}
              >
                {panel.authors.replace(/\.$/, '')}. ({panel.date}).{' '}
                {panel.title}. <i>{panel.extra}</i>. {panel.location}.
              </CV.DatedEntry>
            ))}

            <PermalinkHeader label="Papers Presented" level={3} />
            {cv.conferenceParticipation.papersPresented.map((paper, i) => {
              const extra = paper.extra ? <i>{paper.extra}.</i> : '';
              return (
                <CV.DatedEntry
                  date={paper.date}
                  reset={i === 0}
                  key={`${paper.date}-${paper.title}`}
                >
                  {paper.authors.replace(/\.$/, '')}. ({paper.date}).{' '}
                  {paper.title}.{extra} <i>{paper.conference.title}</i>.{' '}
                  {paper.conference.location}.
                </CV.DatedEntry>
              );
            })}
          </Section>

          <Section>
            <PermalinkHeader
              label="Teaching and Supervision Experience"
              level={2}
            />
            {cv.teachingAndSupervisionExperience.map(position => (
              <div key={position.location}>
                <b>{position.location}</b>
                <ul>
                  {position.courses.map(course => (
                    <li key={`${course.date}-${course.title}`}>
                      {course.title} ({course.date})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section>
            <PermalinkHeader label="Service to Profession" level={2} />
            <ul>
              {cv.serviceToProfession.map(service => (
                <li
                  dangerouslySetInnerHTML={{
                    __html: `${service.title}, ${service.date}`,
                  }}
                  key={`${service.date}-${service.title}`}
                />
              ))}
            </ul>
          </Section>

          <Section>
            <PermalinkHeader label="Reviewing Experience" level={2} />
            <ul>
              {cv.reviewingExperience.map(entry => (
                <li key={`${entry.date}-${entry.title}`}>
                  <i>{entry.title}</i>, {entry.date}
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <PermalinkHeader
              label="Departmental and University Service"
              level={2}
            />
            <ul>
              {cv.departmentalAndUniversityService.map(entry => (
                <li key={`${entry.date}-${entry.title}`}>
                  {entry.title}, {entry.date}
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <PermalinkHeader label="Selected Press and Media" level={2} />
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
                <CV.DatedEntry
                  date={entry.date}
                  reset={i === 0}
                  key={`${entry.date}-${entry.title}`}
                >
                  {entry.authors.replace(/\.$/, '')}. ({entry.date}). {title}.{' '}
                  {source}.
                </CV.DatedEntry>
              );
            })}
          </Section>

          <Section>
            <PermalinkHeader label="Professional Memberships" level={2} />
            <ul>
              {cv.professionalMemberships.map(entry => (
                <li key={`${entry.date}-${entry.title}`}>
                  <a href={entry.url}>{entry.title}</a> (Joined {entry.date})
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <PermalinkHeader label="References" level={2} />
            {cv.references.map((reference, i) => (
              <p
                dangerouslySetInnerHTML={{ __html: reference.reference }}
                key={`reference-${i}`}
              />
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
