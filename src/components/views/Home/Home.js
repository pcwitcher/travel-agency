import React from 'react';
import styles from './Home.scss';
import Section from '../../layout/Section/Section';
import Hero from '../../layout/Hero/Hero';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Home = () => (
  <Section variant='has-hero'>
    <Hero titleText='Let&apos;s explore.' imageSrc='http://uploads.kodilla.com/bootcamp/fer/13.router/image-1.jpg' />
    <Grid>
      <Row middle="md">
        <Col md={6}>
          <h1 className={styles.title}>Open up to the world.</h1>
          <p className={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies eros eu nisl vestibulum iaculis. Maecenas dapibus lorem quis ex ornare dignissim. Donec lobortis commodo augue, vel accumsan nunc facilisis vitae. Suspendisse bibendum congue sapien ut elementum. Nunc pellentesque, tortor et dignissim fermentum, purus mi sagittis neque, ut iaculis arcu lorem nec tellus. Integer in viverra lectus, vitae sollicitudin nulla. Sed mollis at odio eu pretium. Donec porta ligula sed diam pulvinar viverra.</p>
        </Col>
        <Col xs={12} md={5} mdOffset={1} xl={3} xlOffset={2}>
          <List variant='solid'>
            <ListItem title='Hand-picked destinations' icon='map-marker-alt' />
            <ListItem title='Best facilities' icon='hotel' />
            <ListItem title='All-inclusive trips' icon='glass-martini-alt' />
            <ListItem title='24/7 Support' icon='headset' />
          </List>
        </Col>
      </Row>
    </Grid>
  </Section>
);

export default Home;
