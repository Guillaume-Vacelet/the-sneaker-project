import numpy as np
import fastbook
from fastbook import *
fastbook.setup_book()
from fastai.vision import *
import fastai
#from fastai.vision.utils import pil
from PIL import Image
from torchvision import transforms
from pathlib import Path
import torch


def label_func(path_to_image):
    folder_name = str(path_to_image).split('/')
    return folder_name[1]

def main():
    DATASET_PATH = "~/AI_TRACK/the-sneaker-project/app/server/AI_tests/dataset/"
    IMAGE_PATH = "~/AI_TRACK/the-sneaker-project/app/server/AI_tests/test_images/"
    path = Path(f"test_images/")
    print(path.ls())
    img = (path.ls())[0]

    learn = load_learner('dataset/Yeezy_models/Interior_Yeezy.pkl', cpu = True)
    learn.dls.cpu()
    #torch.cuda.device('cpu')
    fastai.torch_core.defaults.device = 'cpu' 
    #arr = plt.imread("test_images/interior_legit.JPG")
    trans = transforms.Compose([transforms.ToTensor()])
    demo = Image.open("test_images/interior_legit.JPG")
    demo_img = transforms.ToTensor()(demo)
    print("demo_img = ")
    print(demo_img.shape)
    #print(type(demo))
    #print(type(demo.getdata()))
  

    pix = np.array(demo).reshape(3, 756, 1008)#.astype("uint8")
    print("pix = ")
    print(pix)
    print(pix.shape)
    #lpred,pred_idx,probs = learn.predict(pix)
    #new_test =  np.array(Image.fromarray((pix * 255).astype(np.uint8)).resize((756, 1008)).convert('RGB')) 
    #print(new_test)
    #print(new_test.shape)
    print(learn.dls.vocab)
    lpred,pred_idx,probs = learn.predict(img)
    print(lpred)
    print(pred_idx)
    print(probs)
    #learn = learn.load('dataset/Interior_Yeezy.pkl.pth')

if __name__ == '__main__':
    main()