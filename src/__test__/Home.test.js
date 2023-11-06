import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/store';

describe('Test Home component', () => {
  it('it should render Home component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
