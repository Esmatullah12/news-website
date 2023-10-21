import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import NewsDetails from '../components/NewsDetails';
import store from '../redux/store';

describe('Test NewsDetails component', () => {
  it('it should render NewsDetails component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <NewsDetails />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
