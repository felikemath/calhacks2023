import os
from apikey import apikey
import requests
import base64
import json
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

os.environ['OPENAI_KEY'] = apikey

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apikey,
}

def asticaAPI(endpoint, payload, timeout):
    response = requests.post(endpoint, data=payload, timeout=timeout, verify=False)
    if response.status_code == 200:
        return response.json()
    else:
        return {'status': 'error', 'error': 'Failed to connect to the API.'}

asticaAPI_key = '<api_key>' # visit https://astica.ai/api-keys/
asticaAPI_timeout = 35 # seconds  Using "gpt" or "gpt_detailed" will increase response time.

asticaAPI_endpoint = 'https://astica.ai:9141/vision/describe'
asticaAPI_modelVersion = '1.0_full' # '1.0_full' or '2.0_full'

#Input Method 1: https URL of a jpg/png image (faster)
asticaAPI_input = 'https://th.bing.com/th/id/OIP.ZqQvTftOtVYggNmxCV3hiQHaHa?pid=ImgDet&rs=1' 


asticaAPI_visionParams = 'gpt,description,objects,faces' # comma separated options; leave blank for all; note "gpt" and "gpt_detailed" are slow.
'''
    '1.0_full' supported options:
        description
        objects
        categories
        moderate
        tags
        brands
        color
        faces
        celebrities
        landmarks
        gpt new (Slow - be patient)
        gpt_detailed new (Much Slower)

    '2.0_full' supported options:
        description
        objects
        tags
        describe_all new
        text_read new
        gpt new (Slow - be patient)
        gpt_detailed new (Much Slower)
        
    '2.1_full' supported options:
        Supports all options
'''

# Define payload dictionary
asticaAPI_payload = {
    'tkn': asticaAPI_key,
    'modelVersion': asticaAPI_modelVersion,
    'visionParams': asticaAPI_visionParams,
    'input': asticaAPI_input,
}

# Call API function and store result
asticaAPI_result = asticaAPI(asticaAPI_endpoint, asticaAPI_payload, asticaAPI_timeout)

print('\nastica API Output:')
print(json.dumps(asticaAPI_result, indent=4))
print('=================')
print('=================')

# Handle asticaAPI response
if 'status' in asticaAPI_result:
    # Output Error if exists
    if asticaAPI_result['status'] == 'error':
        print('Output:\n', asticaAPI_result['error'])
    # Output Success if exists
    if asticaAPI_result['status'] == 'success':
        if 'caption_GPTS' in asticaAPI_result and asticaAPI_result['caption_GPTS'] != '':
            print('=================')
            print('GPT Caption:', asticaAPI_result['caption_GPTS'])
            ai_description = asticaAPI_result['caption_GPTS']
        if 'caption' in asticaAPI_result and asticaAPI_result['caption']['text'] != '':
            print('=================')
            print('Caption:', asticaAPI_result['caption']['text'])
        if 'CaptionDetailed' in asticaAPI_result and asticaAPI_result['CaptionDetailed']['text'] != '':
            print('=================')
            print('CaptionDetailed:', asticaAPI_result['CaptionDetailed']['text'])
        if 'objects' in asticaAPI_result:
            print('=================')
            print('Objects:', asticaAPI_result['objects'])
else:
    print('Invalid response')

template = PromptTemplate(
    input_variables = ['image'],
    template = 
    """
    Generate an extremely accurate description of the image described as {image}. This description
    will be used to generate an image that should be extremely similar to the original
    in terms of realism and theme.
    """
)
if ai_description is not None:
    json_data = {
        'prompt': ai_description,
        'n': 1,
        'size': '1024x1024',
    }

response = requests.post('https://api.openai.com/v1/images/generations', headers=headers, json=json_data)
# print(response)
parse_res = json.loads(response.text)
url = parse_res['data'][0]['url']

img_data = requests.get(url).content
with open('ai_image.jpg', 'wb') as f:
    f.write(img_data)