import React from 'react';
import { Button, Input, Form, Typography } from 'antd';

const { Text } = Typography;

// Image assets - using actual files from public folder for better compatibility
const imgCanvas = "/dot-pattern.svg";
const imgEllipse5 = "/gradient-ellipse.svg";

const imgChain = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' stroke='%23666' fill='none' stroke-width='2'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' stroke='%23666' fill='none' stroke-width='2'/%3E%3C/svg%3E";
const imgDivider = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='2'%3E%3Cline x1='0' y1='1' x2='100' y2='1' stroke='%23e0e0e0' stroke-width='1'/%3E%3C/svg%3E";
const imgAdd = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath d='M12 5v14m-7-7h14' stroke='%23666' fill='none' stroke-width='2'/%3E%3C/svg%3E";
const imgQuestion = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' stroke='%23666' fill='none' stroke-width='2'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' stroke='%23666' fill='none' stroke-width='2'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17' stroke='%23666' stroke-width='2'/%3E%3C/svg%3E";

// Arrow pointing to the form - curved arrow pointing right and down
const imgVector1 = "/arrow.svg";

export default function LandingPage() {
  return (
    <div className="landing-page" data-name="Dashboard - Empty State" data-node-id="2823:6192">
      <div className="main-content" data-name="Main Content" data-node-id="2823:6195">
        <div className="canvas" data-name="Canvas" data-node-id="2823:6196">
          {/* Background with canvas pattern */}
          <div className="canvas-background">
            <div className="canvas-base" />
            <div className="canvas-pattern" style={{ backgroundImage: `url('${imgCanvas}')` }} />
          </div>
          
          {/* Decorative ellipse elements */}
          <div className="ellipse-decoration ellipse-1">
            <div className="ellipse-rotated">
              <img alt="" className="ellipse-img" src={imgEllipse5} />
            </div>
          </div>
          <div className="ellipse-decoration ellipse-2">
            <div className="ellipse-rotated">
              <img alt="" className="ellipse-img" src={imgEllipse5} />
            </div>
          </div>
          
          {/* Message Container */}
          <div className="message-container" data-name="Message Container" data-node-id="2823:6770">
            <div className="message-text">
              <p className="main-text">You clicked a button in a Blings video.</p>
              <p className="main-text">It leads to this link.</p>
              <p className="spacer">&nbsp;</p>
              <p className="sub-text">To change the button's URL, go to the scene's settings.</p>
            </div>

          </div>
          
          {/* Open Link Section */}
          <div className="open-link-section" data-name="Open Link" data-node-id="2823:26788">
            <div className="link-header">
              <div className="link-icon">
                <img src={imgChain} alt="chain" />
              </div>
              <div className="link-content">
                <Text strong className="link-title">CTA Name of analytics</Text>
              </div>
            </div>
            
            <div className="link-divider">
              <img src={imgDivider} alt="divider" />
            </div>
            
            <div className="link-form">
              <Form layout="vertical" className="link-form-content">
                <Form.Item label="Button text:" className="form-item">
                  <div className="button-text-input">
                    <Text>Hey</Text>
                    <Text>, Click here</Text>
                    <Button 
                      type="text" 
                      size="small" 
                      icon={<img src={imgAdd} alt="add" className="add-icon" />}
                      className="add-variable-btn"
                    />
                  </div>
                </Form.Item>
                
                <div className="form-row">
                  <Form.Item label={
                    <span>
                      Font size 
                      <img src={imgQuestion} alt="question" className="question-icon" />
                    </span>
                  } className="form-item-inline">
                    <Input 
                      placeholder="10" 
                      className="font-size-input"
                      style={{ width: 107 }}
                    />
                  </Form.Item>
                </div>
                
                <div className="form-separator" />
                
                <Form.Item label="Open link:" className="form-item">
                  <Input 
                    placeholder="www.google.com" 
                    className="url-input"
                  />
                </Form.Item>
              </Form>
            </div>
            
            {/* Annotation Container - positioned relative to the form */}
            <div className="annotation-container" data-name="Annotation Container" data-node-id="2823:26900">
              <div className="annotation-arrow">
                <img src={imgVector1} alt="arrow" />
              </div>
              <div className="annotation-text">
                <Text className="annotation-label">Right here</Text>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blings Logo */}
        <div className="blings-logo" data-name="Blings_Logo_white 1" data-node-id="2823:34038">
          <img src="/blings-logo.svg" alt="Blings Logo" className="blings-logo-svg" />
        </div>
      </div>
    </div>
  );
}