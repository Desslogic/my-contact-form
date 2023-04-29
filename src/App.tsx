import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <form></form>
            <Label htmlFor={'Full Name'}>Full Name</Label>
            <Input id={'Full Name'} name={'Full Name'} />
            <Label htmlFor={'Email Address'}>Email Address</Label>
            <Input id={'Email Address'} name={'Full Name'} />
            <Label htmlFor={'Billing Address'}>Billing Address</Label>
            <Input className={'Billing Address'} id={'Billing Address'} />
            <Label htmlFor="City">City</Label>
            <Input className={'City'} id={'City'} />
            <Label htmlFor={'State'}>State</Label>
            <Input className={'state'} id={'state'} />
            <Label htmlFor={'zip code'}>zip code</Label>
            <Input className={'zip code'} id={'zip code'} />
            <Label htmlFor={'Phone Number'}>Phone Number</Label>
            <Input className={'phone number'} id={'phone number'} />
            <Label htmlFor={'Method of Payment'}>Method of Payment</Label>
            <Input id={'mode of payment'} name={'mode of payment'} />
            <Label htmlFor={'Credit Card Number or Payment Key'}>
                Credit Card Number or Payment Key
            </Label>
            <Input id={'credit card or payment key'} name={'credit card or payment key'} />
            <Label htmlFor={'Expiration Date'}>Exp.</Label>
            <Input id={'expiration'} name={'expiration'} />
            <Label htmlFor={'Security Code'}>Sec. Code</Label>
            <Input id={'security code'} name={'security code'} />
            <SubmitButton />
        </div>
    );
}

export default App;
