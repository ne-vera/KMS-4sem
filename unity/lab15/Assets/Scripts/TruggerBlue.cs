using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TruggerBlue : MonoBehaviour
{
    public Light blueLigth;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OnTriggerEnter(Collider col) 
    {
        if (col.tag == "tank")
        {
            blueLigth.intensity = 100;
        }
    }
    public void OnTriggerExit(Collider col)
    {
        if (col.tag == "tank")
        {
            blueLigth.intensity = 0;
        }
    }
}
