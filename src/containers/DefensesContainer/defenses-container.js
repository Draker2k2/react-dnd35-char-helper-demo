import { connect } from 'react-redux';
import Defenses from '../../components/Defenses';
import { getData } from '../../actions/defenses';


const mapStateToProps = state => ({
  defenses: state.defenses.defenses,
  dexterityMod: state.abilities.dexMod,
  constitutionMod: state.abilities.conMod,
  wisdomMod: state.abilities.wisMod,
});


const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Defenses);
