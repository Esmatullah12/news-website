import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import NewsArticle from '../components/NewsArticle';
import store from '../redux/store';

describe('Test NewsArticle component', () => {
  it('it should render NewsArticle component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <NewsArticle />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
