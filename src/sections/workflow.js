/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

const data = [
  {
    id: 1,
    title: 'Connect with us',
    text:
      'After an initial contact, we will schedule a meeting with you to discuss the project and set up expectations and deliverables.',
  },
  {
    id: 2,
    title: 'Communication & build',
    text:
      'We start building your vision! During this phase we continue communication in order to keep aligned and receive feedback.',
  },
  {
    id: 3,
    title: 'We deliver',
    text:
      'Once the project has met your needs, we hand it off and perform an exit interview. We are always there for support if something comes up down the road!',
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: 'section.workflow' }}>
      <Container>
        <SectionHeader
          title="Let’s see how it works"
          description="All you need is an idea - we'll take care of the logistics and design. We ensure quality communication and transparency to make sure that the finished result meets or exceeds your vision."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: 'text.heading' }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, 'left'],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: 'special',
    color: 'heading',
    lineHeight: 1,
    letterSpacing: 'heading',
    mr: ['auto', null, 0, 4, null, null, null, 5],
    ml: ['auto', null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
