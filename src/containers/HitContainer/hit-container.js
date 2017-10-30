import { connect } from 'react-redux';
import Hit from '../../components/Hit';
import { getData } from '../../actions/hit';

const mapStateToProps = state => ({
  dexterityMod: state.abilities.dexMod,
  strenghMod: state.abilities.conMod,
  hit: state.hit,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hit);
