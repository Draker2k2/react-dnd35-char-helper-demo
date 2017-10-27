import { connect } from 'react-redux';
import Damage from '../../components/Damage';

const mapStateToProps = state => ({
  dexterityMod: state.abilities.dexMod,
  strenghMod: state.abilities.conMod,
  intelligenceMod: state.abilities.intMod,
  damage: state.damage,
});

export default connect(mapStateToProps, null)(Damage);
