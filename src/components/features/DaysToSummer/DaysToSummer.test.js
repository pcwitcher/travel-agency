import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should render heading', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;

const mockDate = customDate =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }

    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`2019-${date}T12:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('05-04', '48 days to summer');
  checkDescriptionAtDate('06-20', '1 day to summer');
  checkDescriptionAtDate('09-24', '271 days to summer');
});

const checkDescriptionInSummer = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`2019-${date}T12:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.title).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionInSummer('06-21', '');
  checkDescriptionInSummer('07-10', '');
  checkDescriptionInSummer('09-23', '');
});
