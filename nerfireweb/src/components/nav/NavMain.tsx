import React, { Component, CSSProperties } from 'react'


import './NavMain.css';

import logo from '../../assets/logos/icon.png'


import { ClickAwayListener, IconButton, Divider, Fab, Tooltip, Snackbar, Avatar } from '@material-ui/core/';


import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Button from '@material-ui/core/Button';


import MenuIcon from '@material-ui/icons/Menu';
import SideNav from './sideNav/SideNav'

import { RouteComponentProps, withRouter } from 'react-router';
import GeneralServices from '../../services/generalService.json'

import ptFlag from '../../assets/flags/pt.svg'
import ukFlag from '../../assets/flags/uk.svg'
import geFlag from '../../assets/flags/ge.svg'
import ruFlag from '../../assets/flags/ru.svg'
import frFlag from '../../assets/flags/fr.svg'
import itFlag from '../../assets/flags/es.svg'
import esFlag from '../../assets/flags/it.svg'
import plFlag from '../../assets/flags/pl.svg'
import nlFlag from '../../assets/flags/nl.svg'

import worldFlag from '../../assets/flags/world.png'
import { changeLanguage } from "../../App"
import { LangType } from '../../services/languages/LangType';

interface IStats {
    sideNav: boolean;
    langMenu: boolean;
    selectedLang: any;
    expandLangMenu: boolean;
    snackKekax: {
        open: boolean,
        message: string
    };

}

interface IProps extends RouteComponentProps<any> {
    cbSetLanguage: any;
    appLanguage: LangType;
}

const injectProfileMenuBackgroundStyle: CSSProperties = {
    'backgroundColor': 'rgba(255, 255, 255, 0.897)',
    'borderRadius': '4%'
};

const injectLangMenuBackgroundStyle: CSSProperties = {
    'backgroundColor': 'rgba(212, 211, 211, 0.602)',
};


export class NavMain extends Component<IProps, IStats> {

    profileMenuRef: any;
    langMenuRef: any;
    selectedLogoProfileRef: any;

    constructor(props: any) {
        super(props);
        this.state = {
            sideNav: false,
            langMenu: false,
            selectedLang: worldFlag,
            expandLangMenu: false,
            snackKekax: {
                open: false,
                message: ''
            }
        };
        this.profileMenuRef = React.createRef();
        this.langMenuRef = React.createRef();
        this.selectedLogoProfileRef = React.createRef();


        this.handleSideNav = this.handleSideNav.bind(this);
        this.handleLangMenu = this.handleLangMenu.bind(this);
        this.handleNavigateToHome = this.handleNavigateToHome.bind(this);

        this.handleExpandLangMenu = this.handleExpandLangMenu.bind(this);
        this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
        this.handleImpossibleFunction = this.handleImpossibleFunction.bind(this);


    }

    componentDidMount() {
        window.addEventListener('scroll', () => { if (this.state.sideNav) this.setState({ sideNav: false }) });
        //GET ROUTING TO DECLARE NAVBAR POSITION ON HARD LINKING (FIRST PAGE)
        if (this.props.location !== undefined && this.props.location.pathname === GeneralServices.homePath) {
            document.documentElement.style.setProperty("--navMain-position", "absolute");
            document.documentElement.style.setProperty("--navMain-bg-color", "rgba(168, 167, 167, 0.137)");
            document.documentElement.style.setProperty("--navMain-border", "none");


        } else {
            document.documentElement.style.setProperty("--navMain-position", "relative");
            document.documentElement.style.setProperty("--navMain-bg-color", "rgba(81, 83, 48, 0.3)");
            document.documentElement.style.setProperty("--navMain-border", "1px solid #c0c0c0");

        }
        //--GET ROUTING TO DECLARE NAVBAR POSITION ON HARD LINKING (FIRST PAGE)

        this.initFlag();
    }

    componentWillUnmount() {
    }

    componentDidUpdate = (prevProps: IProps, prevStats: IStats) => {
        //GET ROUTING TO DECLARE NAVBAR POSITION ON EVERY NAVIGATION
        if (prevProps.location.pathname !== this.props.location.pathname && this.props.location !== undefined) {
            if (this.props.location.pathname === GeneralServices.homePath) {
                document.documentElement.style.setProperty("--navMain-position", "absolute");
                document.documentElement.style.setProperty("--navMain-bg-color", "rgba(168, 167, 167, 0.137)");
                document.documentElement.style.setProperty("--navMain-border", "none");
            } else {
                document.documentElement.style.setProperty("--navMain-position", "relative");
                document.documentElement.style.setProperty("--navMain-bg-color", "rgba(81, 83, 48, 0.3)");
                document.documentElement.style.setProperty("--navMain-border", "1px solid #c0c0c0");
            }
        }
        //--GET ROUTING TO DECLARE NAVBAR POSITION ON EVERY NAVIGATION

    }

    initFlag() {
        if (localStorage.getItem(GeneralServices.localStorage.localLang)) {
            let flag = localStorage.getItem(GeneralServices.localStorage.localLang);
            if (flag !== null)
                this.changeLanguageFunction(flag);
        }
    }


    handleSideNav() {
        if (this.state.sideNav) {
            this.setState({ sideNav: false });
        } else {
            this.setState({ sideNav: true });
        }
    }



    handleLangMenu() {
        this.state.langMenu ? this.setState({ langMenu: false, expandLangMenu: false }) : this.setState({ langMenu: true });
    }
    langMenuHandlerClose = (event: React.MouseEvent<EventTarget>) => {
        if (this.langMenuRef.current && this.langMenuRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        this.setState({ langMenu: false, expandLangMenu: false });
    }



    changeLanguageFunction(flag: string) {
        switch (flag) {
            case GeneralServices.langPt: {
                this.setState({ selectedLang: ptFlag })
                break;
            }
            case GeneralServices.langUk: {
                this.setState({ selectedLang: ukFlag })
                break;
            }
            default: {
                this.setState({ selectedLang: worldFlag })
                break;
            }
        }
        //callback here
        this.props.cbSetLanguage(flag);
    }

    changeLangHandler(flag: string) {
        this.changeLanguageFunction(flag);
        localStorage.setItem(GeneralServices.localStorage.localLang, flag);
        this.setState({ langMenu: false, expandLangMenu: false });
    }



    handleExpandLangMenu(open: boolean) {
        this.setState({ expandLangMenu: open })
    }
    callSideNavFunction = (childData: any) => {
        this.setState({ sideNav: childData });
    }
    //PUSHING HISTORY TO NAVIGATE TO HOMEPAGE ON ICON LOGO CLICK
    handleNavigateToHome() {
        document.documentElement.style.setProperty("--navMain-position", "absolute");
        document.documentElement.style.setProperty("--navMain-bg-color", "rgba(168, 167, 167, 0.137)");
        document.documentElement.style.setProperty("--navMain-border", "none");
        this.props.history.push(GeneralServices.homePath);
    }
    /*BINDED - OPEN SNACKBAR*/
    handleCloseSnackBar() {
        this.setState({
            snackKekax: {
                open: false,
                message: ''
            }
        });
    }

    /*BINDED - OPEN SNACKBAR*/
    handleImpossibleFunction(){
        this.setState({
            snackKekax: {
                open: true,
                message: this.props.appLanguage.appLanguage.snackKekax.kekaxhot
            }
        })
    }
    

    render() {
        return (
            <React.Fragment>
                <header className='header-wrapper'>
                    <nav className="nav-wrapper">
                        <div className="left-container">
                            <IconButton className="left-container-menu" color="inherit" aria-label="open drawer" edge="end" onClick={this.handleSideNav}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className="center-container">
                            <div className="center-drawer" onClick={this.handleNavigateToHome}>
                                <div className='logo-wrapper'>
                                    <img src={logo} style={{ 'width': '100%', 'height': '100%' }} alt='logo app' />
                                </div>
                            </div>
                        </div>
                        <div className="right-container" >
                            <div className="right-flex">
                                <div className="lang-block" ref={this.langMenuRef}>
                                    <Avatar alt="Lang Logo" className="lang-block-avatar" src={this.state.selectedLang} onClick={this.handleLangMenu}> </Avatar>
                                </div>
                                <div className="visitor-block">
                                    <Button color='inherit' className="visitor-block-text1" onClick={this.handleImpossibleFunction}> {this.props.appLanguage.appLanguage.navbar.in}</Button>
                                    <div className="visitor-block-text2">
                                        <span className="visitor-block-signup1">{this.props.appLanguage.appLanguage.navbar.visitor}</span><span className="visitor-block-signup2" onClick={this.handleImpossibleFunction}>{this.props.appLanguage.appLanguage.navbar.up}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <Popper style={{ 'marginTop': '5.5vh', 'marginLeft': '-4em' }} anchorEl={this.langMenuRef.current} open={this.state.langMenu} transition disablePortal>
                        {({ TransitionProps, placement }: any) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper className='lang-wrapper' style={injectLangMenuBackgroundStyle}>
                                    <ClickAwayListener onClickAway={this.langMenuHandlerClose}>
                                        <div>
                                            <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langPt)}>
                                                <Tooltip title="Portuguese" aria-label="Portugal" placement="top">
                                                    <Avatar alt="Lang Logo" src={ptFlag}> </Avatar>
                                                </Tooltip>
                                            </div>
                                            <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langUk)}>
                                                <Tooltip title="English" aria-label="England" placement="top">
                                                    <Avatar alt="Lang Logo" src={ukFlag}> </Avatar>
                                                </Tooltip>
                                            </div>
                                            <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langRu)}>
                                                <Tooltip title="Russian" aria-label="Russia" placement="top">
                                                    <Avatar alt="Lang Logo" src={ruFlag}> </Avatar>
                                                </Tooltip>
                                            </div>
                                            <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langGe)}>
                                                <Tooltip title="German" aria-label="Germany" placement="top">
                                                    <Avatar alt="Lang Logo" src={geFlag}> </Avatar>
                                                </Tooltip>
                                            </div>
                                            <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langEs)}>
                                                <Tooltip title="Spanish" aria-label="Spain" placement="top">
                                                    <Avatar alt="Lang Logo" src={esFlag}> </Avatar>
                                                </Tooltip>
                                            </div>
                                            <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langIt)}>
                                                <Tooltip title="Italian" aria-label="Italy" placement="top">
                                                    <Avatar alt="Lang Logo" src={itFlag}> </Avatar>
                                                </Tooltip>
                                            </div>
                                            <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langFr)}>
                                                <Tooltip title="French" aria-label="France" placement="top">
                                                    <Avatar alt="Lang Logo" src={frFlag}> </Avatar>
                                                </Tooltip>
                                            </div>
                                            <div>
                                                <div className="lang-expand-flags" style={this.state.expandLangMenu ? { 'display': 'block' } : { 'display': 'none' }}>

                                                    <div>
                                                        <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langPl)}>
                                                            <Tooltip title="Polish" aria-label="Poland" placement="top">
                                                                <Avatar alt="Lang Logo" src={plFlag}> </Avatar>
                                                            </Tooltip>
                                                        </div>
                                                        <div className='lang-option' onClick={() => this.changeLangHandler(GeneralServices.langNl)}>
                                                            <Tooltip title="Dutch" aria-label="Netherlands" placement="top">
                                                                <Avatar alt="Lang Logo" src={nlFlag}> </Avatar>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lang-expand-arrow">
                                                    {!this.state.expandLangMenu ?
                                                        <IconButton aria-label="expand" size="small" onClick={() => this.handleExpandLangMenu(true)}>
                                                            <ExpandMoreIcon fontSize="inherit" />
                                                        </IconButton>
                                                        :
                                                        <IconButton aria-label="expand" size="small" onClick={() => this.handleExpandLangMenu(false)}>
                                                            <ExpandLessIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </header>
                
                <Snackbar
                    open={this.state.snackKekax.open}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    autoHideDuration={1000}
                    onClose={this.handleCloseSnackBar}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    message={<span id="message-id">{this.state.snackKekax.message}</span>}
                />

                <SideNav appLanguage={this.props.appLanguage} opened={this.state.sideNav} callSideNav={this.callSideNavFunction} />
            </React.Fragment>
        );
    }
}
export default withRouter(NavMain);
