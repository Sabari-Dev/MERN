import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container, Form, FormFeedback,
    Input,
    Label, Modal, ModalBody, ModalHeader,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent, TabPane
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {makeStyles, Theme, createStyles}
    from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import {useNavigate, useParams} from "react-router-dom";
import classnames from "classnames";
import axios from "axios";
import JSONbig from "json-bigint";
import index from "../../Landing/NFTLanding";
import Select from "react-select";
import {useFormik, Field} from "formik";
import * as Yup from "yup";
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import toast, {Toaster} from 'react-hot-toast';


const AddVerification = () => {
    const {id} = useParams();
    const [verificationData, setVerificationData] = useState([]);
    const [template, setTemplate] = useState([]);
    const [ruleList, setRuleList] = useState([]);
    const [ruleName, setRuleName] = useState([]);
    const[allocationRuleListID,setallocationRuleListID]=useState()
    const allocationRuleList =[]
    const [verificationLookups,setVerificationLookups]=useState([])
    const[verification_applyCapacity,setVerificationApplyCapacity]=useState([])
    const[verification_loanType,setverificationLoanType]=useState([])
    const[verification_verificationType,setVerVerificationType]=useState([])
    const[verification_EmployenmentType,setVerificationEmpType]=useState([])
    const[verififactionRelationship,setVerificationRelationship]=useState([])
    const [applyCapacity, setApplyCapacity] = useState("");
    const [loanType, setLoanType] = useState('');
    const [verificationType, setVerificationType] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [allocationRule, setAllocationRule] = useState(0);
    // const [allocateTo, setAllocateTo] = useState('');
    const [relationshipType, setRelationshipType] = useState('');
    const [question_name, setFieldName] = useState('');
    const [sequence, setQuestionSequence] = useState('');
    const [group_label, setGroupLabel] = useState('');
    const [group_sequence, setGroupSequence] = useState('');
    const [is_mandatory, setMandatory] = useState(false);
    const [questionList, setQuestionList] = useState([]);
    const [question_type, setFieldType] = useState('')
    const [editQuestions, setEditQuestions] = useState(false)
    const [editData, setEditData] = useState({})
    const [relation,setRelation] = useState('')
    const[questionId,setQuestionId]=useState('')
    const [question_options, setFieldOptions] = useState([]);
    const [currentOption, setCurrentOption] = useState('');
    // const[questionsObject,setQuestionObject]=useState({})
    const[verificationId,setVerificationId]=useState()
    const[allocationId,setAllocationId]=useState()
    const[questionErrors,setQuestionErrors]=useState({})
    const[afterEdit,setAfterEdit]=useState({})
    const [edit_group_label,setEditGroupLabel]=useState("")
    const [edit_group_sequence,setEditGroupSequence]=useState("")
    const [edit_question_name,setEditQuestionName]=useState("")
    const [edit_question_type,setEditQuestionType]=useState("")
    const [edit_question_sequence,setEditQuestionSequence]=useState("")
    const [edit_question_option,setEditQuestionOption]=useState([])
    const[edit_is_mandatory,setEditMandatory]=useState(is_mandatory)
    const[afterUpdateData,setAfterUpdate]=useState({})
    const [allocationData, setAllocationdata] = useState([]);
    const[ruleID,setRuleID]=useState()
    const[loanTypeValue,SetLoanTypeValue]=useState('')

    const access_token=sessionStorage.getItem("accessToken")
    useEffect(() => {
        let header = {
            "Content-Type": "application/json",
            'Accept': '*/*',
            'Authorization': `Bearer ${JSON.parse(access_token)}`,
        };
        //get rules
        axios.get(process.env.REACT_APP_API_URL +`/alpha/v1/rule`, {
            headers: header,
            transformResponse: function (response) {
                return JSONbig.parse(response);
            }
        }).then(response => {
            setRuleList(response.data);
            const filteredRules = response.data.filter(rule => rule.type === "ALLOCATION_RULE");
            setRuleName(filteredRules);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
        });

    }, []);

    useEffect(() => {
        let header = {
            "Content-Type": "application/json",
            'Accept': '*/*',
            'Authorization': `Bearer ${JSON.parse(access_token)}`,
        };

    }, [verificationLookups]);
    console.log(`Rule Data :: `, ruleList)
    console.log(`Rule Name :: `, ruleName)
    console.log('lookups ::',verificationLookups)
    console.log('verification',verification_verificationType)
    console.log('apply capacity',verification_applyCapacity)
    console.log('Employnment',verification_EmployenmentType)
    console.log('relation',verififactionRelationship)




    // {
    //     template.map((templateData, index) => (
    //         template.relationship_type = templateData.relationship_type
    //     ));
    // }

    console.log('verficationData',verificationData)





    useEffect(() => {
        let header = {
            "Content-Type": "application/json",
            'Accept': '*/*',
            'Authorization': `Bearer ${JSON.parse(access_token)}`,
        };
        axios.get(process.env.REACT_APP_API_URL +`/alpha/v1/verification/category/${id}`, {
            headers: header,
            transformResponse: function (response) {
                return JSONbig.parse(response);
            }
        }).then(response => {
            setVerificationData(response.result);
            setVerificationType(response.result.verification_type);
            setApplyCapacity(response.result.apply_capacity);
            setLoanType(response.result.loan_type_id);
            setEmploymentType(response.result.employment_type);


            const {templates: responseTemplates,allocation_rules:responseAllocation} = response.result;
            setTemplate([...responseTemplates]);
            setallocationRuleListID(responseAllocation[0].allocation_rule_id)
            setAllocationId(responseAllocation[0].allocation_rule_id)
        }).catch(error => {
            console.log(error);
        }).finally(() => {

        });

    }, []);
    const getData=()=>{
        let header = {
            "Content-Type": "application/json",
            'Accept': '*/*',
            'Authorization': `Bearer ${JSON.parse(access_token)}`,
        };
        axios.get(process.env.REACT_APP_API_URL +`/alpha/v1/verification/category/${id}`, {
            headers: header,
            transformResponse: function (response) {
                return JSONbig.parse(response);
            }
        }).then(response => {
            setVerificationData(response.result);
            setVerificationType(response.result.verification_type);
            setApplyCapacity(response.result.apply_capacity);
            setLoanType(response.result.loan_type_id);
            setEmploymentType(response.result.employment_type);

            const {templates: responseTemplates,allocation_rules:responseAllocation} = response.result;
            setTemplate([...responseTemplates]);
            setallocationRuleListID(responseAllocation[0].allocation_rule_id)
            setAllocationId(responseAllocation[0].allocation_rule_id)
        }).catch(error => {
            console.log(error);
        }).finally(() => {

        });
    }
    // const handleQuestionObject=()=>{
    //     let groupLabels={}
    //     let templateQuestions=verificationData.templates.map((question)=>question)
    //     let questionObject=templateQuestions.find((relation)=>relation.relationship_type === relationshipType)
    //     questionObject?.questions?.forEach((question)=>{
    //         console.log('questions',question)
    //         if( !groupLabels[question.group_label]){
    //             groupLabels[question.group_label]=[]
    //
    //         }
    //         if(groupLabels[question.group_label] && question.group_label){
    //             groupLabels[question.group_label].push(question)
    //         }
    //
    //     })
    //    setQuestionObject(groupLabels)
    //
    // }
    // console.log(questionsObject)

    const questionValidation = useFormik({
            enableReinitialize: true,
            initialValues:{
                group_label:group_label,
                group_sequence:group_sequence,
                question_type :question_type ,
                question_name: question_name,
                sequence:sequence,
            },
            validationSchema:Yup.object({
                group_label:Yup.string().required("Group label is required."),
                group_sequence:Yup.string().required("Group sequence required."),
                question_type :Yup.string().required("Question type is required."),
                question_name:Yup.string().required("Question name is required."),
                sequence:Yup.string().required("Question sequence is required.")
            }),
            onSubmit:()=>{
                addQuestion()
            }
        },
    )
    const addQuestion = async() => {

        const errors = await questionValidation.validateForm()

        console.log('errors',errors);

       await questionValidation.setTouched({
            group_label:true,
            group_sequence:true,
            question_type:true,
            question_name:true,
            sequence:true
        })
        if(Object.keys(errors).length === 0){
            const questionData = {
                question_type,
                question_name,
                question_options,
                sequence: parseInt(sequence),
                group_label,
                group_sequence: parseInt(group_sequence),
                is_mandatory
            };
            setQuestionList([...questionList, questionData]);
            const filterRelationship = template.filter((temp) => temp.relationship_type === relationshipType)
            console.log(filterRelationship)
            filterRelationship[0].questions.push(questionData)
            setRelation(relationshipType)
            setFieldOptions([])
            generateRequestObject()
            tog_addQuestionModal()
        }else{
            toast.error("Invaild Form")
            console.log('quesError',questionErrors)
        }


    };




    // 170306889727145474
    console.log('id','170306889727551780  ','qesid',questionId)
    console.log("verificationID",id)

    const handleEditQuestions = (id) => {

        setEditQuestions(true)
        console.log('id',id)
        setQuestionId(id)
        console.log('relationship',relationshipType)
        let getTemplate=template.map((temp)=>temp)
        const getQuestions = getTemplate.filter((ques) => ques.relationship_type === relationshipType);
        let getQuestion=getQuestions.map((ques)=>ques?.questions)
        let getData=getQuestion[0].find((ques)=>ques?.question_id === id)
        console.log('data--',getData)
        setEditData(getData)
    }
    console.log('editdata',editData)
    console.log('temp', template)

    // const editQuestionValidation = useFormik({
    //         enableReinitialize: true,
    //         initialValues:{
    //             edit_group_label:edit_group_label ,
    //             edit_group_sequence:edit_group_sequence ,
    //             edit_question_type :edit_question_type ,
    //             edit_question_name: edit_question_name ,
    //             edit_question_sequence:edit_question_sequence,
    //         },
    //         validationSchema:Yup.object({
    //             edit_group_label:Yup.string().required("Group label is required."),
    //             edit_group_sequence:Yup.string().required("Group sequence required."),
    //             edit_question_type :Yup.string().required("Question type is required."),
    //             edit_question_name:Yup.string().required("Question name is required."),
    //             edit_question_sequence:Yup.string().required("Question sequence is required.")
    //         }),
    //         onSubmit:()=>{
    //             handleEditQuestion()
    //         }
    //     },
    // )
    const handleEditQuestion = () => {
        // const errors= await editQuestionValidation.validateForm()
        // console.log('edit error',errors)
        // console.log('edit validation',editQuestionValidation.values.edit_group_label)
        // await editQuestionValidation.setTouched({
        //     edit_group_label:true,
        //     edit_group_sequence:true,
        //     edit_question_type:true,
        //     edit_question_name:true,
        //     edit_question_sequence:true,
        //
        // })

            let afterEditData = {
                question_id: questionId,
                group_label: edit_group_label === "" ? editData?.group_label:edit_group_label,
                group_sequence: edit_group_sequence === "" ? parseInt(editData?.group_sequence) : parseInt(edit_group_sequence),
                question_type: edit_question_type === "" ? editData?.question_type : edit_question_type,
                question_name: edit_question_name ==="" ? editData?.question_name : edit_question_name,
                question_category: "",
                question_options: edit_question_option ===[] ? editData?.question_options.concat(edit_question_option) : edit_question_option.concat(editData?.question_options),
                sequence: edit_question_sequence ==="" ? parseInt(editData?.sequence) : parseInt(edit_question_sequence),
                is_mandatory: edit_is_mandatory

            }
            console.log('before', afterEditData)
            setAfterUpdate(afterEditData)
            setMandatory(false)
            setFieldOptions([])
            tog_editQuestionModal()
            generateRequestObject()

    };

    console.log('afterDate',afterUpdateData)
    console.log(`Edited Template ::`,template);


    useEffect(() => {
       if(verificationData && questionId && afterUpdateData){
           const updateTemplate= verificationData.templates.map((template)=>{
               if(template.relationship_type === relationshipType){
                   const updateQuestions=template.questions.map((question)=>
                       question.question_id ===questionId ? {...question,...afterUpdateData} :question)
                   return {...template,questions: updateQuestions};
               }
               return template
           })
           setTemplate(updateTemplate)
       }

    }, [afterUpdateData,verificationData]);

    // verificationData?.templates?.map((template)=>{
    //     setQuestionList((preval)=> {
    //         ...preval, template.questions
    //     })
    // })

    useEffect(() => {
        verificationData?.templates?.map(((template) => {
            setQuestionList((preval) => {
                return [...preval, ...template.questions]
            });
            // console.log( template.questions)
        }))

    if(verificationData?.loan_type_id){
        if (verificationData?.loan_type_id === 1) {
            SetLoanTypeValue("PERSONAL_LOAN")
        }else if(verificationData?.loan_type_id===2){
            SetLoanTypeValue("BUSINESS_LOAN")
        }else if(verificationData?.loan_type_id===3){
            SetLoanTypeValue("HOME_LOAN")
        }else if(verificationData?.loan_type_id===4){
            SetLoanTypeValue("LOAN_AGAINST_PROPERTY")
        }else{
            SetLoanTypeValue("CREDIT_CARD")
        }
    }

    if(verificationData){
        const getRelation=verificationData?.templates?.filter((template)=>template.relationship_type===relationshipType)
        if (getRelation?.length > 0) {
            const ruleId = getRelation[0].rule_id;
            console.log('Rule ID:', ruleId);
            setRuleID(ruleId)
            // Now you can use the 'ruleId' variable as needed.
        }
    }

    }, [verificationData,relationshipType,questionId])
    console.log('loantype',loanTypeValue)
    console.log('rule_id::',ruleID)

    const getRuleData = () => {
        //eslint-disable-next-line no-undef
        const findRule = ruleName.find((rule) => BigInt(rule.id) === BigInt(allocationRuleListID))
        console.log('rules 1', findRule)
        if (findRule) {
            let {type, name, id} = findRule
            let data = {type, name, id}
            const isDuplicate = allocationData.some((data) => (data.id && data.type && data.name))
            if (!isDuplicate) {
                setAllocationdata((prev) => [...prev, data])
            }
        } else {
            console.log("rule is undefined")
    }
}


    console.log('rules',allocationRuleList)
    // console.log("All question List", questionList)


    // questionList.forEach((questionData, index) => {
    //     console.log(`Question ${index + 1} ::`, questionData);
    // });






    const generateRequestObject = () => {
        console.log("Inside the Generate Request");
        let templatesArr = [];
        questionList.forEach((questionData) => {
            let template = {
                // eslint-disable-next-line no-undef
                ...(ruleID !==undefined && ruleID !==0 ? {rule_id: BigInt(ruleID)} : 0),
                relationship_type: relationshipType,
                questions: [
                    {
                        question_type: questionData.question_type,
                        question_name: questionData.question_name,
                        question_options: [],
                        question_category: "QUESTION",
                        group_label: questionData.group_label,
                        group_sequence: parseInt(questionData.group_sequence),
                        sequence: parseInt(questionData.sequence),
                        is_mandatory: questionData.is_mandatory === true,
                    },
                ],

            };
            templatesArr.push(template);

        });


        let data = {
            // eslint-disable-next-line no-undef
            ...(verificationData?.length !== 0 ? {verification_category_id: id === undefined ? BigInt(verificationData?.verification_category_id) :BigInt(id)} :0),
            verification_category: `${verificationType} ${employmentType} ${loanType}`,
            apply_capacity: applyCapacity,
            loan_type_id: parseInt(loanType),
            verification_type: verificationType,
            employment_type: employmentType,
            allocation_rules: [
                {
                    // eslint-disable-next-line no-undef
                    ...(verificationData?.length !== 0 ? {verification_category_id: id === undefined ? BigInt(verificationData?.verification_category_id) :BigInt(id)} :0),
                    // eslint-disable-next-line no-undef
                    allocation_rule_id:allocationId !== undefined ? BigInt(allocationId):BigInt("170306889727575384"),
                },
            ],
            templates: template,
        };

        console.log("verId",)

        console.log("DATA JSON STRUCT: ", data);

        const apiUrl = process.env.REACT_APP_API_URL +'/alpha/v1/verification/category/create';
        axios.post(apiUrl, data, {

            transformResponse: function (response) {
                return JSONbig.parse(response);
            },
            transformRequest: function (request) {
                return JSONbig.stringify(request);
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(access_token)}`,
            },
        }).then((response)=>{
            setVerificationData(response?.result)
            console.log('postResponse',verificationData)
            const {templates: responseTemplates ,allocation_rules:responseAllocation} = response.result;
            setTemplate([...responseTemplates]);
            setallocationRuleListID(responseAllocation[0].allocation_rule_id)
            setAllocationId(responseAllocation[0].allocation_rule_id)
        })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
            });

    };

    const handleNavigate=()=>{
        navigate(`/verification/verification-type`)
    }



    const pillsToggle = (tab) => {
        if (pillsTab !== tab) {
            setpillsTab(tab);
        }
    };

    console.log('ruleIDList ::',allocationRuleListID)

    const handleOptionChange = (e) => {
        setCurrentOption(e.target.value);
        // setFieldOptions(e.target.value);
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter' && currentOption.trim() !== '') {
            setFieldOptions([...question_options, currentOption.trim()]);
            setCurrentOption('');
            if(editQuestions){
                setEditQuestionOption([...edit_question_option,currentOption.trim()])
                setCurrentOption('')
            }
        }
    };

    const handleRemoveOption = (index) => {
        const updatedOptions = [...question_options];
        updatedOptions.splice(index, 1);
        setFieldOptions(updatedOptions);
        if(editQuestions){
            updatedOptions.splice(index, 1);
            setEditQuestionOption(updatedOptions);
        }
    };

    const [modal_allocationRule, setmodal_allocationRule] = useState(false);

    function tog_allocationRule() {
        console.log("inside")
        console.log(modal_allocationRule)
        setmodal_allocationRule(!modal_allocationRule);
    }

    const [modal_addRuleModal, setmodal_addRuleModal] = useState(false);

    function tog_addRuleModal() {
        setmodal_addRuleModal(!modal_addRuleModal);
    }

    const [modal_addQuestionModal, setmodal_addQuestionModal] = useState(false);

    function tog_addQuestionModal() {
        setmodal_addQuestionModal(!modal_addQuestionModal);
    }

    const [modal_editQuestionModal, setmodal_editQuestionModal] = useState(false);

    function tog_editQuestionModal() {
        setmodal_editQuestionModal(!modal_editQuestionModal);
    }

    const navigate = useNavigate();


    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                width: '100%',
            },
            button: {
                marginTop: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            actionsContainer: {
                marginBottom: theme.spacing(2),
            },
            resetContainer: {
                padding: theme.spacing(3),
            },
        }),
    );

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [pillsTab, setpillsTab] = useState(0);
    const steps = getSteps();

    const handleNext = async () => {

        if (activeStep == 0) {
            if(verificationData.length !== 0){
                getRuleData()
            }
            console.log("Inside the next function");

            const errors = await VerificationValidation.validateForm();

            console.log("Form errors:", errors);

            VerificationValidation.setTouched({
                employmentType: true,
                loanType: true,
                applyCapacity: true,
                verificationType: true
            })

            if (Object.keys(errors).length === 0) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                console.log("Form is not filled");
            }
        } else if (activeStep == 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    function getSteps() {
        return [
            <b key="Verification Type" style={{color: "skyblue"}}>Verification Type</b>,
            <b key="review">Verification Allocation Rule</b>,
            <b key="published">Verification Template</b>
        ];
    }


    const [allocateRule, setallocateRule] = useState("");
    const [allocateTo, setAllocateTo] = useState("")
    const [index, setIndex] = useState(null)
    const[editRuleId,setEditRuleId]=useState()



    console.log('allocationId',allocationId)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "allocateRule") {
            setallocateRule(value)
        } else {
            setAllocateTo(value)
        }

    }

    const addRule = async () => {

        console.log("Inside the next function");

        const errors = await AllocationValidation.validateForm();

        console.log("Form errors:", errors);

        if (Object.keys(errors).length === 0) {
            // eslint-disable-next-line no-undef
            let allocationValues=ruleName.find((rule)=>BigInt(rule.id) === BigInt(allocationId) )

            let{type,name,id}=allocationValues
            const data = {type, name,id}
            console.log("datasss", data)

            const newArray = [...allocationData]
            newArray.push(data)
            setAllocationdata(newArray)
            console.log("allocateRule", allocateRule)
            console.log("allocateTo", allocateTo)
            console.log(allocationData)
            setmodal_allocationRule(!modal_allocationRule)
        } else {
            console.log("Form is not filled");
        }


    };

    const [modal_editallocationRule, setmodal_editallocationRule] = useState(false);

    function tog_editallocationRule() {
        setmodal_editallocationRule(!modal_editallocationRule)
    }

    const editAllocation = (object,index) => {
        setallocateRule(object.type)
        setAllocateTo(object.name)
        setEditRuleId(object.id)
        setIndex(index)
        setmodal_editallocationRule(!modal_editallocationRule)
    }

    const updateRule = () => {
        // eslint-disable-next-line no-undef
        let allocationValues=ruleName.find((rule)=>BigInt(rule.id) === BigInt(editRuleId) )
        let {type,name,id}=allocationValues
        const data = {type, name,id}

        setAllocationdata((prevForms) =>
            prevForms.map((form, ind) =>
                ind === index ? data : form
            )
        );
        setmodal_editallocationRule(!modal_editallocationRule)
    }
    // useEffect(() => {
    //     verificationData
    // }, []);

    // console.log(`Question List : ${{...questionList}}`)
    // separate using group label
    const getRelationShip = []
    for (let ele of template) {
        if (ele.relationship_type === relationshipType) {
            getRelationShip.push(ele)
        }
    }
    // console.log('relation', getRelationShip)
    const groupLabels = []

    getRelationShip.forEach((group) => {
        console.log('each index', group)
        group.questions.forEach((question) => {
            // console.log("each label", question.group_label)
            if (groupLabels.indexOf(question.group_label) === -1) {
                groupLabels.push(question.group_label)
            }
        })
    })

    // console.log('labels', groupLabels)

    //set the mandatory value
    const handleMandatory = () => {
        setMandatory(!is_mandatory)
        setEditMandatory(!editData.is_mandatory)
    }

    const AllocationValidation = useFormik({
        enableReinitialize: true,
        initialValues: {
            allocateRule: allocationId,
            allocateTo: allocateTo
        },
        validationSchema: Yup.object({
            allocateRule: Yup.string().required("Allocation Rule is required"),
            allocateTo: Yup.string().required("Allocation To is required")
        })
    })

    const VerificationValidation = useFormik({
        enableReinitialize: true,
        initialValues: {
            applyCapacity: applyCapacity,
            loanType: loanType,
            verificationType: verificationType,
            employmentType: employmentType
        },
        validationSchema: Yup.object({
            applyCapacity: Yup.string().required("Apply capacity is required"),
            loanType: Yup.string().required("Loan type is required"),
            verificationType: Yup.string().required("Verification Type is required"),
            employmentType: Yup.string().required("Employment Type is required"),
        }),
        onSubmit: (values) => {
            handleNext()
        }
    })


    // console.log(is_mandatory)
    //add template values
    const handleTemplate = (value) => {
        if (!template.some(item => item.relationship_type === value)) {
            setTemplate((prev) => ([
                ...prev, {
                    relationship_type: value,
                    // eslint-disable-next-line no-undef
                    rule_id: BigInt("170065849828833436"),
                    questions: []
                }

            ]));
        } else {
            toast.error("Relationship Already exiting!")
        }

    };
    console.log(template)



    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <Row>
                    <Col xl={12}>
                        <Card>
                            <CardBody>
                                <Form onSubmit={(e) => {
                                    e.preventDefault();
                                    VerificationValidation.handleSubmit();
                                    return false
                                }} action="#">

                                    <div>
                                        <Row>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label
                                                        className="form-label"
                                                        htmlFor="gen-info-username-input"
                                                    >
                                                        Verification Category
                                                    </Label>
                                                    <Input
                                                        // defaultValue={(verificationData) ? verificationData.verification_category : "Working"}
                                                        value={`${verificationType} ${employmentType} ${loanType}`}
                                                        type="text"
                                                        className="form-control"
                                                        id="gen-info-username-input"
                                                        placeholder="Enter loan type code"
                                                        disabled
                                                        name="empname"/>
                                                </div>
                                            </Col>
                                            <Col lg={4}>

                                                <div className="mb-3">
                                                    <Label className="form-label">Apply Capacity</Label>
                                                    <select
                                                        className={`form-control form-select ${VerificationValidation.touched.applyCapacity && VerificationValidation.errors.applyCapacity ? 'is-invalid' : ''}`}
                                                        id="workflow_type"
                                                        aria-label=".form-select-lg example"
                                                        value={verificationData.apply_capacity ? verificationData.apply_capacity : applyCapacity}
                                                        onChange={(e) => setApplyCapacity(e.target.value)}
                                                        onBlur={VerificationValidation.handleBlur}

                                                    >

                                                        <option value=''>Select</option>
                                                        {verification_applyCapacity.map((value)=>{
                                                          return <option key={value.id} value={value?.lu_key}>{value?.lu_key}</option>
                                                        })}
                                                    </select>
                                                    {VerificationValidation.touched.applyCapacity && VerificationValidation.errors.applyCapacity ? (
                                                        <div
                                                            className="invalid-feedback">{VerificationValidation.errors.applyCapacity}</div>
                                                    ) : null}

                                                </div>

                                            </Col>

                                            <Col lg={4}>

                                                <div className="mb-3">
                                                    <Label className="form-label">Loan Type</Label>
                                                    <select
                                                        className={`form-control form-select ${VerificationValidation.touched.loanType && VerificationValidation.errors.loanType ? 'is-invalid' : ''}`}
                                                        id="workflow_type"
                                                        aria-label=".form-select-lg example"
                                                        value={verificationData.loan_type_id ? loanTypeValue:loanType}
                                                        onChange={(e) => setLoanType(e.target.value)}>
                                                        <option value=''> Select </option>
                                                        <option value="1">PERSONAL_LOAN</option>
                                                        <option value="2">BUSINESS_LOAN</option>
                                                        <option value="3">HOME_LOAN</option>
                                                        <option value="4">LOAN_AGINST_PROPERTY</option>
                                                        <option value="5">CREDIT_CARD</option>
                                                    </select>
                                                    {VerificationValidation.touched.loanType && VerificationValidation.errors.loanType ? (
                                                        <div
                                                            className="invalid-feedback">{VerificationValidation.errors.loanType}</div>
                                                    ) : null}
                                                </div>
                                            </Col>

                                            <Col lg={4}>

                                                <div className="mb-3">
                                                    <Label className="form-label">Verification Type</Label>
                                                    <select
                                                        className={`form-control form-select ${VerificationValidation.touched.verificationType && VerificationValidation.errors.verificationType ? 'is-invalid' : ''}`}
                                                        id="workflow_type"
                                                        aria-label=".form-select-lg example"

                                                        value={verificationData.verification_type ? verificationData.verification_type : verificationType}
                                                        onChange={(e) => setVerificationType(e.target.value)}>
                                                        <option value=''>Select</option>
                                                        {verification_verificationType.map((value)=>{
                                                            return <option key={value.id} value={value?.lu_key}>{value?.lu_key}</option>
                                                        })}
                                                    </select>
                                                    {VerificationValidation.touched.verificationType && VerificationValidation.errors.verificationType ? (
                                                        <div
                                                            className="invalid-feedback">{VerificationValidation.errors.verificationType}</div>
                                                    ) : null}
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="mb-3">
                                                    <Label className="form-label">Employment Type</Label>
                                                    <select
                                                        className={`form-control form-select ${VerificationValidation.touched.employmentType && VerificationValidation.errors.employmentType ? 'is-invalid' : ''}`}
                                                        id="workflow_type"
                                                        aria-label=".form-select-lg example"

                                                        value={verificationData.employment_type ? verificationData.employment_type : employmentType}
                                                        onChange={(e) => setEmploymentType(e.target.value)}>
                                                        <option value=''>Select</option>
                                                        {verification_EmployenmentType.map((value)=>{
                                                            return <option key={value.id} value={value?.lu_key}>{value?.lu_key}</option>
                                                        })}
                                                    </select>
                                                    {VerificationValidation.touched.employmentType && VerificationValidation.errors.employmentType ? (
                                                        <div
                                                            className="invalid-feedback">{VerificationValidation.errors.employmentType}</div>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    {/*{verificationType_validate &&*/}
                                    {/*    <p style={{color: 'red'}}>All fields are mandatory</p>}*/}
                                </Form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>;
            case 1:
                return <Row >
                    {allocationData?.map((rule, index) => {
                        return (
                                <Card style={{
                                    width: "18rem",
                                    height: "12rem",
                                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                                }} key={index + 1} className="me-2">
                                    <CardBody style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <div>
                                            <p><b>Allocation Rule:</b> {rule.type}</p>
                                            <p><b>Allocated To:</b> {rule.name}</p>
                                            <div style={{textAlign: "center"}}>
                                                <Button
                                                    onClick={() => editAllocation(rule,index)}>Edit</Button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                        )
                    })}

                        <Card style={{
                            width: "18rem",
                            height: "12rem",
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                        }} className="mx-2">
                            <CardBody style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Button className="btn btn-primary" data-bs-toggle="modal"
                                        color="primary"
                                        onClick={() => {
                                            tog_allocationRule()
                                        }
                                        }>
                                    <i className="ri-add-fill align-bottom me-1"></i>
                                    Add Allocation Rule
                                </Button>
                            </CardBody>
                        </Card>


                </Row>;
            case 2:
                return <Col xl={12}>
                    <Toaster/>
                    <Col>
                        <Card>
                            <CardBody>
                                <Col>
                                    <Row>
                                        <Col><h5 className="mb-3">Rule</h5></Col>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="hstack gap-2">

                                                <Button type="button" className="btn btn-primary"
                                                        onClick={() => tog_addRuleModal()} data-bs-toggle="modal"
                                                        data-bs-target="#addRuuleModals">
                                                    <i className="ri-add-fill align-bottom me-1"></i>{" "}
                                                    Add New Rule
                                                </Button>
                                            </div>
                                        </div>
                                    </Row>
                                    <CardBody>
                                        <Nav pills className="nav-primary mb-3">
                                            {template.map((_template, index) => (
                                                <NavItem key={index}>
                                                    <Col>
                                                        <NavLink
                                                            style={{cursor: "pointer"}}
                                                            className={{active: pillsTab === index}}
                                                            onClick={() => {
                                                                pillsToggle(index)
                                                                setRelationshipType(_template.relationship_type)
                                                            }}
                                                        >
                                                            {_template.relationship_type}
                                                        </NavLink>

                                                    </Col>
                                                </NavItem>
                                            ))}
                                        </Nav>
                                        <TabContent activeTab={pillsTab} className="text-muted">
                                            {template.map((_template, index) => (
                                                <TabPane tabId={index} id={`${_template.relationship_type}-${index}`}
                                                         key={index} >
                                                    <Col>
                                                        <CardHeader>
                                                            <Label>Questions</Label>
                                                        </CardHeader>

                                                        <CardBody>
                                                            <Row>
                                                                <div
                                                                    className="row-sm-auto ms-auto d-flex justify-content-end">
                                                                    <div className="hstack gap-2">
                                                                        <Button color="primary"
                                                                                onClick={() => {
                                                                                    tog_addQuestionModal()

                                                                                }}
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#addQuestionModal">
                                                                            <i className="ri-add-fill me-1 align-bottom"></i>Add
                                                                            Question</Button>
                                                                    </div>
                                                                </div>
                                                                &nbsp;&nbsp;
                                                                <Col>
                                                                    <div id="decisionList">
                                                                        <div className="flex-grow-1 ms-2">
                                                                            {groupLabels.map((group, index) => {
                                                                                return (<div
                                                                                        key={index}
                                                                                        className="table-responsive table-card mt-3 mb-1">
                                                                                        <h4 style={{textTransform: 'capitalize'}}>{group}</h4>
                                                                                        <table
                                                                                            className="table align-middle table-nowrap"
                                                                                            id="decisionTable">
                                                                                            <thead>
                                                                                            <tr className="text-center">
                                                                                                <th>S.no</th>
                                                                                                <th>Field Type</th>
                                                                                                <th>Question Sequence
                                                                                                </th>
                                                                                                <th>Field Name</th>
                                                                                                <th>Group Name</th>
                                                                                                <th>Mandatory</th>
                                                                                                <th>Action</th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>


                                                                                            {_template?.questions?.filter((groups) => groups.group_label === group).map((questionData, index) => (

                                                                                                <tr key={questionData?.question_id}
                                                                                                    className="text-center">
                                                                                                    <td className="customer_name text-center">{index + 1}</td>
                                                                                                    <td className="customer_name text-center">{questionData.question_type}</td>
                                                                                                    <td className="customer_name text-center">{questionData.sequence}</td>
                                                                                                    <td className="customer_name text-center">{questionData.question_name}</td>
                                                                                                    <td className="customer_name text-center">{questionData.group_sequence}</td>
                                                                                                    {/*<td className="customer_name">{questionData.is_mandatory}</td>*/}
                                                                                                    <td className="customer_name text-center"><span
                                                                                                        className={`badge  ${questionData.is_mandatory ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}
                                                                                                        style={{fontSize: "15px"}}>{questionData.is_mandatory ? "true" : "false"}</span>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <div
                                                                                                            className="edit ">
                                                                                                            <a onClick={() => {
                                                                                                                tog_editQuestionModal()
                                                                                                                handleEditQuestions(questionData?.question_id)
                                                                                                            }}
                                                                                                               className="btn btn-soft-success">
                                                                                                                <i className=" ri-edit-2-fill"></i>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            ))}


                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                )
                                                                            })}
                                                                            <div className="mt-2">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Col>
                                                </TabPane>
                                            ))}
                                        </TabContent>
                                    </CardBody>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>;
            default:
                return 'Unknown step';
        }
    }

    console.log(`Verification Type :: ${verificationType}`)
    console.log(`Employment Type :: ${employmentType}`)
    console.log(`Loan Type :: ${loanType}`)

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Add Verification" pageTitle="Verification"/>
                    <div className={classes.root}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={index}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        <div className="bx-pull-right">
                                            <div className="hstack gap-2">
                                                <div className={classes.actionsContainer}>
                                                    <div>
                                                        <Button
                                                            disabled={activeStep === 0}
                                                            onClick={handleBack}
                                                            className={classes.button}>Back</Button>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={activeStep === steps.length - 1 ? (()=>{
                                                                generateRequestObject()
                                                                handleNavigate()
                                                            }) : handleNext}
                                                            className={classes.button}>
                                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            navigate("/verification/verification-type")
                        )}
                    </div>
                </Container>
            </div>

            <Modal id="addRuleModal" tabIndex="-1" isOpen={modal_addRuleModal} toggle={() => {
                tog_addRuleModal();
            }} centered>
                <ModalHeader className="p-3" toggle={() => {
                    tog_addRuleModal();
                }}>
                    Add Rule
                </ModalHeader>
                <ModalBody>
                    <form>
                        <Col>
                            <div className="mb-4">
                                <Label htmlFor="choices-single-default"
                                       className="form-label text-muted">Relationship</Label>
                                <select
                                    className={`form-control form-select`}
                                    id="workflow_type"
                                    aria-label=".form-select-lg example"
                                    defaultValue={template.relationship_type}
                                    onChange={(e) => {
                                        setRelationshipType(e.target.value)

                                    }}>>
                                    <option defaultValue="">Select type</option>
                                    {verififactionRelationship.map((relation)=>{
                                        return <option key={relation.id} value={relation.lu_key}>{relation.lu_key}</option>
                                    })}
                                </select>
                            </div>
                        </Col>

                        <div>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <Label htmlFor="ruleName" className="form-label">Rule</Label>
                                    <select className={`form-control form-select`}
                                            id="workflow_type"
                                            aria-label=".form-select-lg example">
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            </Col>
                        </div>
                        <div className="text-end">
                            <button type="button" onClick={() => {
                                tog_addRuleModal()
                                handleTemplate(relationshipType)
                            }
                            } className="btn btn-primary">Add
                            </button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>


            <Modal id="addQuestionModal" tabIndex="-1" isOpen={modal_addQuestionModal} toggle={() => {
                tog_addQuestionModal();
            }} centered>
                <ModalHeader className="p-3" toggle={() => {
                    tog_addQuestionModal();

                }}>
                    Add Question
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        questionValidation.handleSubmit()
                    }}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Group Label</label>
                            <input type="text" className={`form-control ${questionValidation.errors.group_label && questionValidation.touched.group_label ? 'is-invalid' : ""}`} list="data" id="fullName"
                                   placeholder="Enter group code" name='group_label'
                                   onChange={(e) => {
                                       setGroupLabel(e.target.value)
                                   }}
                                   onBlur={questionValidation.handleBlur}
                            />
                            {questionValidation.errors.group_label && questionValidation.touched.group_label ? <div className='text-danger'>{questionValidation.errors.group_label}</div> :null}
                            <datalist id="data" style={{background: 'transparent'}}>
                                <select>
                                    {groupLabels.map((label, index) => (
                                        <option key={index} value={label} style={{background: 'transparent'}}/>
                                    ))}</select>
                            </datalist>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Group Sequence</label>
                            <input type="number" className={`form-control ${questionValidation.errors.group_sequence && questionValidation.touched.group_sequence ? 'is-invalid' : ""}`} id="fullName" placeholder="Enter group code"
                                   onChange={(e) => setGroupSequence(e.target.value)}

                            />
                            {questionValidation.errors.group_sequence && questionValidation.touched.group_sequence ?  <div className=" text-danger">{questionValidation.errors.group_sequence}</div> :null }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fieldType" className="form-label">
                                Field Type
                            </label>
                            <select
                                className={`form-control form-select  ${questionValidation.errors.question_type && questionValidation.touched.question_type ? 'is-invalid' : null}`}
                                id="workflow_type"
                                aria-label=".form-select-lg example"
                                onChange={(e) => setFieldType(e.target.value)}>
                                <option defaultValue="">Select type</option>
                                <option value="text">Text</option>
                                <option value="dropdown">Dropdown
                                </option>
                            </select>
                            {questionValidation.errors.question_type && questionValidation.touched.question_type ? <div className='text-danger'>{questionValidation.errors.question_type}</div> : null }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="questionNameInpt" className="form-label">Field Name</label>
                            <input type="text" className={`form-control ${questionValidation.errors.question_name && questionValidation.touched.question_name ? 'is-invalid' :null }`} id="questionNameInpt"
                                   placeholder="Enter field name" onChange={(e => setFieldName(e.target.value))}
                            />
                            {questionValidation.errors.question_name && questionValidation.touched.question_name ? <div className='text-danger'>{questionValidation.errors.question_name}</div> :null}
                        </div>
                        {question_type === "dropdown" && (
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="optionInput" className="form-label">
                                        Field Options
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control`}
                                        id="optionInput"
                                        placeholder="Enter field options"
                                        value={currentOption}
                                        onChange={handleOptionChange}
                                        onKeyDown={handleEnterKeyPress}
                                    />

                                </div>
                                <div>
                                    {question_options.map((option, index) => (
                                        <span key={index} className="mx-1">
            <Button className="my-1" variant="secondary" onClick={() => handleRemoveOption(index)}>{option}
                <i className="ri-close-fill" style={{fontSize: '16px', marginLeft: '4px'}}/>
            </Button>
          </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="mb-3 mt-1">
                            <label htmlFor="fullName" className="form-label ">Question Sequence</label>
                            <input type="number" className={`form-control ${questionValidation.errors.sequence && questionValidation.touched.sequence ? 'is-invalid' :"" }`} id="emailInput" placeholder="Enter sequence"
                                   onChange={(e) => setQuestionSequence(e.target.value)}

                            />
                            {questionValidation.errors.sequence && questionValidation.touched.sequence ?
                                <div className='text-danger'>{questionValidation.errors.sequence}</div> : null}
                        </div>

                        <div className="form-check form-switch mb-3">
                            <Input className="form-check-input" type="checkbox" role="switch" id="mandatory"
                                   defaultChecked={false} onChange={handleMandatory}
                            />
                            <Label className="form-check-label" for="SwitchCheck1">Mandatory</Label>
                        </div>
                        <div className="text-end">
                            <button type="submit" className='btn btn-primary'>Add
                            </button>

                        </div>
                    </form>
                </ModalBody>
            </Modal>
            <Modal id="editQuestionModal" tabIndex="-1" isOpen={modal_editQuestionModal} toggle={() => {
                tog_editQuestionModal()
            }} centered>
                <ModalHeader className="p-3" toggle={() => {
                    tog_editQuestionModal()

                }}>
                    Update Question
                </ModalHeader>
                <ModalBody>
                    <form >
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Group Label</label>
                            <input type="text" className="form-control" list="data" id="fullName"
                                   placeholder="Enter group code" name='group_label'
                                   onChange={(e)=>setEditGroupLabel(e.target.value)}
                                   defaultValue={editData?.group_label}
                            />
                            {/*{editQuestionValidation.errors.edit_group_label && editQuestionValidation.touched.edit_group_label ? <div className='text-danger'>{editQuestionValidation.errors.edit_group_label}</div> :null}*/}
                            <datalist id="data" style={{background: 'transparent'}}>
                                <select>
                                    {groupLabels.map((label, index) => (
                                        <option key={index} value={label} style={{background: 'transparent'}}/>
                                    ))}</select>
                            </datalist>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Group Sequence</label>
                            <input type="number" className="form-control" id="fullName" placeholder="Enter group code" name='group_sequence'
                                   onChange={(e)=>setEditGroupSequence(e.target.value)}
                                   defaultValue={editData?.group_sequence}/>
                            {/*{editQuestionValidation.errors.edit_group_sequence && editQuestionValidation.touched.edit_group_sequence ? <div className='text-danger'>{editQuestionValidation.errors.edit_group_sequence}</div> :null}*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fieldType" className="form-label">
                                Field Type
                            </label>
                            <select
                                className={`form-control form-select}`}
                                id="workflow_type"
                                aria-label=".form-select-lg example"
                                name='group_type'
                                onChange={(e)=>setEditQuestionType(e.target.value)}
                                defaultValue={editData?.question_type}>
                                <option defaultValue="">Select type</option>
                                <option value="text">Text</option>
                                <option value="dropdown">Dropdown
                                </option>
                            </select>
                            {/*{editQuestionValidation.errors.edit_question_type && editQuestionValidation.touched.edit_question_type ? <div className='text-danger'>{editQuestionValidation.errors.edit_question_type}</div> :null}*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="questionInput" className="form-label">Field Name</label>
                            <input type="text" className="form-control" id="questionInput" name='group_name'
                                   placeholder="Enter field name" onChange={(e)=>setEditQuestionName(e.target.value)}
                                   defaultValue={editData?.question_name}/>
                            {/*{editQuestionValidation.errors.edit_question_name && editQuestionValidation.touched.edit_question_name ? <div className='text-danger'>{editQuestionValidation.errors.edit_question_name}</div> :null}*/}
                        </div>

                        {(edit_question_type !== "text" )&& (edit_question_type === "dropdown" || editData?.question_type  === "dropdown") ? (
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="optionInput" className="form-label">
                                        Field Options
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="optionInput"
                                        placeholder="Enter field options"
                                        value={currentOption}
                                        onChange={handleOptionChange}
                                        onKeyDown={handleEnterKeyPress}
                                    />
                                </div>
                                <div>
                                    {editData.question_options  && editData.question_options.map((option, index) => (
                                        <span key={index} className="mx-1">
            <Button className="my-1" variant="secondary" onClick={() => handleRemoveOption(index)}>{option}
                <i className="ri-close-fill" style={{fontSize: '16px', marginLeft: '4px'}}/>
            </Button>
          </span>))}
                                    {edit_question_option  && edit_question_option.map((option, index) => (
                                        <span key={index} className="mx-1">
            <Button className="my-1" variant="secondary" onClick={() => handleRemoveOption(index)}>{option}
                <i className="ri-close-fill" style={{fontSize: '16px', marginLeft: '4px'}}/>
            </Button>
          </span>))}
                                </div>
                            </div>
                        ):""}
                        <div className="mb-3 mt-1">
                            <label htmlFor="fullName" className="form-label ">Question Sequence</label>
                            <input type="number" className="form-control" id="emailInput" placeholder="Enter sequence" name='sequence'
                                   onChange={(e)=>setEditQuestionSequence(e.target.value)}
                                   defaultValue={editData?.sequence}/>
                            {/*{editQuestionValidation.errors.edit_question_sequence && editQuestionValidation.touched.edit_question_sequence ? <div className='text-danger'>{editQuestionValidation.errors.edit_question_sequence}</div> :null}*/}
                        </div>

                        <div className="form-check form-switch mb-3">
                            <Input className="form-check-input" type="checkbox" role="switch" id="mandatory"
                                   onChange={handleMandatory}
                                   name='is_mandatory'
                                   defaultChecked={editData?.is_mandatory}/>
                            <Label className="form-check-label" for="SwitchCheck1">Mandatory</Label>
                        </div>
                        <div className="text-end">
                            <button type="button" className='btn btn-success' onClick={handleEditQuestion}>Save change
                            </button>

                        </div>
                    </form>
                </ModalBody>
            </Modal>
            <Modal id="addQuestionModal" tabIndex="-1" isOpen={modal_allocationRule} toggle={() => {
                tog_allocationRule()
            }} centered>
                <ModalHeader className="p-3" toggle={() => {
                    tog_allocationRule()

                }}>
                    Add Allocation Rule
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        AllocationValidation.handleSubmit();
                        return false
                    }} action="#">
                        <div key={index}>
                            <Row>
                                <div className="mb-3">
                                    <Label className="form-label">Allocation Rule</Label>
                                    <select
                                        className={`form-control form-select ${AllocationValidation.touched.allocateRule && AllocationValidation.errors.allocateRule ? 'is-invalid' : ''}`}
                                        aria-label=".form-select-lg example"
                                        name='allocateRule'
                                        onChange={(e)=>setAllocationId(e.target.value)}
                                        onBlur={AllocationValidation.handleBlur}

                                    >
                                        <option value="">select</option>
                                        {ruleName.map((rule)=>{
                                           return <option value={rule.id} key={rule.id}>{rule.type}</option>
                                        })}
                                    </select>
                                    {AllocationValidation.touched.allocateRule && AllocationValidation.errors.allocateRule ? (
                                        <div
                                            className="invalid-feedback">{AllocationValidation.errors.allocateRule}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Row>
                                <div className="mb-3">
                                    <Label className="form-label">Allocate To</Label>
                                    <select
                                        className={`form-control form-select ${AllocationValidation.touched.allocateTo && AllocationValidation.errors.allocateTo ? 'is-invalid' : ''}`}
                                        aria-label=".form-select-lg example"
                                        name="allocateTo"
                                        onChange={handleChange}
                                        onBlur={AllocationValidation.handleBlur}
                                    >
                                        <option value="">select</option>
                                        {ruleName.map((rule) => {
                                            return <option value={rule.id} key={rule.id}>{rule.name}</option>
                                        })}
                                    </select>
                                    {AllocationValidation.touched.allocateTo && AllocationValidation.errors.allocateTo ? (
                                        <div
                                            className="invalid-feedback">{AllocationValidation.errors.allocateTo}</div>
                                    ) : null}
                                </div>
                            </Row>
                        </div>
                        <div className="text-end">
                            <Button onClick={addRule} type="submit" className="btn btn-primary"
                                    color="primary">Add</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>

            <Modal id="addQuestionModal" tabIndex="-1" isOpen={modal_editallocationRule} toggle={() => {
                tog_editallocationRule()
            }} centered>
                <ModalHeader className="p-3" toggle={() => {
                    tog_editallocationRule()

                }}>
                    Update Allocation Rule
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <div key={index}>
                            <Row>
                                <div className="mb-3">
                                    <Label className="form-label">Allocation Rule</Label>
                                    <select
                                        className="form-control form-select"
                                        aria-label=".form-select-lg example"
                                        name='allocateRule'
                                        defaultValue={allocateRule}
                                        onChange={(e)=>setAllocationId(e.target.value)}
                                    >
                                        <option defaultValue={allocationId}>{allocateRule}</option>
                                        {ruleName.map((rule)=>{
                                            return <option value={rule.id} key={rule.id}>{rule.type}</option>
                                        })}
                                    </select>

                                </div>
                            </Row>
                            <Row>
                                <div className="mb-3">
                                    <Label className="form-label">Allocate To</Label>
                                    <select
                                        className={"form-control form-select"}
                                        aria-label=".form-select-lg example"
                                        name="allocateTo"
                                        defaultValue={allocateTo}
                                        onChange={handleChange}
                                    >

                                        <option defaultValue={allocationId}>{allocateTo}</option>
                                        {ruleName.map((rule)=>{
                                            return <option value={rule.id} key={rule.id}>{rule.name}</option>
                                        })}
                                    </select>
                                </div>
                            </Row>
                        </div>
                        <div className="text-end">
                            <Button onClick={updateRule} className="btn btn-primary" color="primary">Update</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default AddVerification;